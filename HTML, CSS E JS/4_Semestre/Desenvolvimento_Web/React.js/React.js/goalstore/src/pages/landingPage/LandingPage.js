import React from "react";
import "./Styles.scss";
import imgJogador from "../../assets/imagens/imagem1.svg"
import imgCamisa from "../../assets/imagens/imagem2.svg"
import { Link } from "react-router-dom";

export const landingPage = () => {
    return (
        <section className="landingPage">
            <div className="telaEsquerda">
                <div>
                    <h1 className="goalStore">Goal Store</h1>
                </div>

                <div>
                    <img className="imagem1" alt="" src={imgJogador} />
                </div>
            </div>

            <div className="telaDireita">
                <div className="parteSuperior">
                    <h2>O melhor valor do Mercado</h2>
                    <p>"Preserving Sporting Heritage: Your Gateway to the Past "Preserving Sporting Heritage: Unlocking the Past through Vintage Jerseys in Your Store Vintage Jerseys"</p>
                </div>

                <div className="parteInferior">
                    <img className="imagem2" alt="" src={imgCamisa} />
                    <p>Your vintage jersey store is more than just a shop; it's a living sports museum. It preserves the emotions, history, and competitive spirit that make sports a universal passion. By sharing these vintage jerseys, you keep the memories of a priceless sports past alive, allowing everyone to touch, feel, and relive the magic of ssports through these historical relics</p>

                    <button>
                        <Link to='/login'><a> SEE MORE </a></Link>
                    </button>

                </div>

            </div>
            </section>
    );
}

export default landingPage;