import React, { useEffect, useState } from "react";
import "./Styles.scss";
import imgLupa from "../../assets/imagens/lupa.png";
import adminIcon from "../../assets/imagens/admin.png";
import { Link } from "react-router-dom";
import axios from "axios";

export const Estoque = () => {
  const [listaCamisas, setListaCamisas] = useState([]);
  const [nome, setNome] = useState("");
  const [id, setId] = useState("");

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const getCamisa = async () => {
    try {
      let response = await axios.get("http://localhost:5000/camisa");
      setListaCamisas(response.data);
    } catch (error) {
      console.error("Erro ao obter camisas:", error);
    }
  };

  const getCamisaNome = async () => {
    try {
      let response = await axios.get(
        `http://localhost:5000/camisa/buscaNome/${nome}`
      );
      setListaCamisas(response.data);
    } catch (error) {
      console.error("Erro ao obter camisas por nome:", error);
    }
  };

  const getCamisaID = async () => {
    try {
      let response = await axios.get(
        `http://localhost:5000/camisa/buscaId/${id}`
      );
      setListaCamisas(response.data);
    } catch (error) {
      console.error("Erro ao obter camisas por ID:", error);
    }
  };

  useEffect(() => {
    getCamisa();
  }, []);

  return (
    <section className="estoque">
      <div className="div1">
        <h1 className="goalStore">Goal Store</h1>
        <img className="adminIcon" src={adminIcon} />
        <Link to="/admin">
          <h1 className="admin">Admin</h1>
        </Link>
        <Link to="/gerencia">
          <h1 className="gerencia">Gerencia</h1>
        </Link>
        <Link to="/estoque">
          <h1 className="estoque">Estoque</h1>
        </Link>
      </div>

      <div className="div2">
        <div>
          <h1>Estoque</h1>

          <input
            className="pesquisa"
            placeholder="Pesquisar por Nome..."
            value={nome}
            onChange={handleNomeChange}
          />
          <img src={imgLupa} className="imgLupa" onClick={getCamisaNome} />

          <input
            className="pesquisa2"
            placeholder="Pesquisar por ID..."
            value={id}
            onChange={handleIdChange}
          />
          <img src={imgLupa} className="imgLupa2" onClick={getCamisaID} />
        </div>

        <div className="tabela">
          <table border="table">
            <thead>
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
              {listaCamisas.map((item) => (
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
        </div>
      </div>

      <div className="rodape">
        <h1>GoalStore.com.br</h1>
      </div>
    </section>
  );
};
