import React, { useState } from "react";
import "./Styles.scss";
import adminIcon from "../../assets/imagens/admin.png";
import { Link } from "react-router-dom";
import axios from "axios";

export const Gerencia = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('');
    const [id, setId] = useState('');
    const [camisaExcluida, setCamisaExcluida] = useState([]);
    const [camisaAlterada, setCamisaAlterada] = useState(null);
    const [listaCamisas, setListaCamisas] = useState([]);
    const [camisas, setCamisas] = useState([]);

    const listarCamisas = async () => {
        try {
            const response = await axios.get("http://localhost:5000/camisa");
            setCamisas(response.data);
        } catch (error) {
            console.error("Erro ao obter a lista de camisas:", error);
        }
    };


    async function salvarCamisa() {
        // Tratando o valor de preco
        const precoNumerico = parseFloat(preco);

        if (isNaN(precoNumerico) || precoNumerico <= 0) {
            alert('O preço precisa ser um número válido.');
            return;
        }

        let camisa = {
            nome: nome,
            descricao: descricao,
            imagem: imagem,
            preco: precoNumerico, // Usando o valor tratado
            categoria: categoria
        };

        try {
            let r = await axios.post('http://localhost:5000/camisa', camisa);
            let id = r.data.id;

            alert('Camisa cadastrada. ID' + id);
        } catch (error) {
            alert('Erro ao cadastrar a camisa: ' + error.message);
        }
    }

    const excluirCamisa = async (id) => {
        try {
            let r = await axios.delete(`http://localhost:5000/camisa/delete/${id}`);
            console.log("Camisa excluída com sucesso:", r.data.mensagem);

            // Armazenar a camisa excluída no estado
            setCamisaExcluida(r.data.camisa);

            // Recarregar a lista de camisas após excluir uma camisa
            listarCamisas();
        } catch (error) {
            console.error("Erro ao excluir a camisa:", error);
        }
    };


    const alterarCamisa = async (id) => {
        let camisa = {
            nome: nome,
            descricao: descricao,
            imagem: imagem,
            preco: preco,
            categoria: categoria
        }
        try {
            let r = await axios.put(`http://localhost:5000/camisa/alteraId/${id}`, camisa);

            setCamisaAlterada(r.data.camisa);
            console.log("Camisa alterada com sucesso:", r.data.mensagem);

            // Recarregar a lista de camisas após alterar uma camisa
            listarCamisas();
        } catch (error) {
            console.error("Erro ao alterar a camisa:", error);
        }
    };


    return (
        <body className="gerencia">
            <div className="divPrinc">
                <h1 className="goalStore">Goal Store</h1>
                <img className="adminIcon" src={adminIcon} />
                <Link to='/admin'><h1 className="admin">Admin</h1></Link>
                <Link to='/gerencia'><h1 className="gerencia">Gerencia</h1></Link>
                <Link to='/estoque'><h1 className="estoque">Estoque</h1></Link>

            </div>

            <div className="divSec">
                <h1>Gerenciar Produtos</h1>

                <div className="botoes">

                    <div className="divId">
                        <label>ID</label>
                        <input type="number" className="idBtn" value={id} onChange={e => setId(e.target.value)} />
                    </div>

                    <div className="divNome">
                        <label>Nome</label>
                        <input type="text" className="nomeBtn" value={nome} onChange={e => setNome(e.target.value)} />
                    </div>

                    <div className="divDescricao">
                        <label>Descrição</label>
                        <input type="text" className="descricaoBtn" value={descricao} onChange={e => setDescricao(e.target.value)} />
                    </div>

                    <div className="divImagem">
                        <label>Imagem</label>
                        <input type="" className="imagemBtn" value={imagem} onChange={e => setImagem(e.target.value)} />
                    </div>

                    <div className="divPreco">
                        <label>Preço</label>
                        <input type="number" className="precoBtn" value={preco} onChange={e => setPreco(e.target.value)} />
                    </div>

                    <div className="divCategoria">
                        <label>Categoria</label>
                        <input type="text" className="categoriaBtn" value={categoria} onChange={e => setCategoria(e.target.value)} />
                    </div>

                    <div className="botoesSalvar">
                        <button className="salvar" onClick={salvarCamisa}>Cadastrar</button>
                        <button className="cancelar" onClick={() => excluirCamisa(id)}>Excluir</button>
                        <button className="alterar" onClick={() => alterarCamisa(id)}>Alterar</button>
                    </div>

                </div>

                <div className="formCRUD">
                    <form>
                        <table border="table">
                            <thead>
                                <p>Camisa modificada:</p>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Descrição</th>
                                    <th>Imagem</th>
                                    <th>Preco</th>
                                    <th>Categoria</th>
                                </tr>
                            </thead>
                            <tbody>
                                {camisaExcluida.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.Nome ?? "<sem nome>"}</td>
                                        <td>{item.Descrição}</td>
                                        <td>{item.Imagem}</td>
                                        <td>{item.Preco}</td>
                                        <td>{item.Categoria}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </form>

                </div>
            </div>

            <div className="rodape">
                <h1>GoalStore.com.br</h1>
            </div>
        </body>

    );
}

export default Gerencia;