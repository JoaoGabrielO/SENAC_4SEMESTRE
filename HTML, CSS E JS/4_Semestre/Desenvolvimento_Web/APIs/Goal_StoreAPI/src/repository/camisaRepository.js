import { con } from "./connection.js";


export async function salvar(camisa) {
  const comando = `
      INSERT INTO camisa (nome_camisa, descricao, imagem, preco, 
        categoria)
                    VALUES (?, ?, ?, ?, ?)
  `

  const [info] = await con.query(comando, [camisa.nome, camisa.descricao,
  camisa.imagem, camisa.preco, camisa.categoria])
  camisa.id = info.insertId;

  return camisa;
}

export async function listar() {
  const comando = `
     SELECT id_camisa       as id,
            nome_camisa     as Nome,
            descricao       as Descrição,
            imagem          as Imagem,
            preco           as Preço,
            categoria       as Categoria 
       FROM camisa
  `

  const [linhas] = await con.query(comando);
  return linhas;
}


export async function buscarPorNome(nome) {
  const comando = `
    SELECT id_camisa       as id,
           nome_camisa     as Nome,
           descricao       as Descrição,
           imagem          as Imagem,
           preco           as Preço,
           categoria       as Categoria 
      FROM camisa
      WHERE nome_camisa like ?
  `

  const [linhas] = await con.query(comando, ['%' + nome + '%']);
  return linhas;
}

export async function buscarPorId(id) {
  const comando = `
  SELECT id_camisa       as id,
           nome_camisa     as Nome,
           descricao       as Descrição,
           imagem          as Imagem,
           preco           as Preço,
           categoria       as Categoria 
      FROM camisa
      WHERE id_camisa like ?
  `
  const [linhas] = await con.query(comando, ['%' + id + '%']);
  return linhas;
}

export async function alterar(id, camisa) {
  const comando = `
      UPDATE camisa
      SET nome_camisa = ?,
          descricao = ?,
          imagem = ?,
          preco = ?,
          categoria = ?
      WHERE id_camisa = ?
    `;

  const [info] = await con.query(comando, [camisa.nome, camisa.descricao, camisa.imagem, camisa.preco, camisa.categoria, id]);

  if (info.affectedRows > 0) {
    return true;
  } else {
    return false;
  }
}

export async function remover(id) {
  const comando = 'DELETE FROM camisa WHERE id_camisa = ?'

  const [info] = await con.query(comando, [id])
  return info.affectedRows;
}

