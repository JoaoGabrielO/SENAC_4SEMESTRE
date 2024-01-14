import { buscarPorNome, listar, remover, salvar, alterar, buscarPorId } from "../repository/camisaRepository.js";

import { Router } from "express";
const endpoints = Router();


endpoints.post('/camisa', async (req, resp) => {
  try {
    let camisa = req.body;

    if (!camisa.nome) {
      throw new Error('Nome da camisa é obrigatório!');
    }

    if (!camisa.descricao) {
      throw new Error('Descricao da camisa é obrigatório!');
    }

    if (!camisa.preco) {
      throw new Error('Preco da camisa é obrigatório!');
    }

    if (!camisa.categoria) {
      throw new Error('Categoria da camisa é obrigatório!');
    }

    if (isNaN(camisa.preco) || camisa.preco <= 0)
      throw new Error('Preço de camisa invalido!');

    let r = await salvar(camisa);

    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
});


endpoints.get('/camisa', async (req, resp) => {
  try {
    let r = await listar();
    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})




endpoints.get('/camisa/buscaNome/:nome', async (req, resp) => {
  try {
    let nome = req.params.nome;
    let r = await buscarPorNome(nome);
    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.get('/camisa/buscaId/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let r = await buscarPorId(id);
    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.delete('/camisa/delete/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let camisaExcluida = await buscarPorId(id);
    let linhasAfetadas = await remover(id);

    if (linhasAfetadas == 0)
      throw new Error('Camisa não encontrada!');

    if (camisaExcluida != null)
      resp.send({
        mensagem: 'Camisa excluída com sucesso!',
        camisa: camisaExcluida
      });
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    });
  }
});

endpoints.put('/camisa/alteraId/:id', async (req, res) => {
  const camisaId = req.params.id;
  const novaCamisa = req.body;

  try {
    const camisaAtualizada = await alterar(camisaId, novaCamisa);

    if (camisaAtualizada) {
      res.status(200).json({ mensagem: 'Camisa atualizada com sucesso' });
    } else {
      res.status(404).json({ mensagem: 'Camisa não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao atualizar camisa:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
});

export default endpoints;


