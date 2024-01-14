import React from "react";
import "./Styles.scss";
import imgNeymar from "../../assets/imagens/neymar.png";
import adminIcon from "../../assets/imagens/admin.png";
import { Link } from "react-router-dom";

export const Admin = () => {
    return (
        <section className="admin1">
            <div className="div1">
                <h1 className="goalStore">Goal Store</h1>
                <img className="adminIcon" src={adminIcon} />
                <Link to='/admin'><h1 className="admin">Admin</h1></Link>
                <Link to='/gerencia'><h1 className="gerencia">Gerencia</h1></Link>
                <Link to='/estoque'><h1 className="estoque">Estoque</h1></Link>
            </div>

            <div className="div2">
                <p>Dashboard</p>
                <p>Calendar</p>
                <p>People</p>
                <p>Dashboard</p>
            </div>

            <div className="botoes">
                
                <button className="adicionar"> <img src={imgNeymar} className="imgNeymar" /><Link to='/gerencia'><p>Adicionar</p></Link></button>
                <button className="remover"> <img src={imgNeymar} className="imgNeymar" /><Link to='/gerencia'><p>Remover</p></Link></button>
                <button className="alterar"> <img src={imgNeymar} className="imgNeymar" /><Link to='/gerencia'><p>Alterar</p></Link></button>
            </div>

            <div className="rodape">
                <h1>GoalStore.com.br</h1>
            </div>
            </section>
    );
}
