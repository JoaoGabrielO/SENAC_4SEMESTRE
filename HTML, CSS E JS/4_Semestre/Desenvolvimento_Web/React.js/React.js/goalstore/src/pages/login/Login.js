import React from "react";
import "./Styles.scss";
import imgNeymar from "../../assets/imagens/neymar.png";
import adminIcon from "../../assets/imagens/admin.png";
import coracaoIcon from "../../assets/imagens/coracao.png";
import carrinhoIcon from "../../assets/imagens/carrinho.png";
import { Link } from "react-router-dom";



export const login = () => {
    return (
        <body>
        <div className="divPrinc">
    
                <h1 className="goalStore">Goal Store</h1>   
                <img className="adminIcon" src={adminIcon}/>  
                <img className="coracaoIcon" src={coracaoIcon}/>  
                <img className="carrinhoIcon" src={carrinhoIcon}/>  
                
            <div className="divGeral">
    
               
                <div className="login"> 
                    <img className="imgNeymar" src={imgNeymar}/>
                    <form>
    
                        <h2>Login</h2>
                        <p>Enter your account details</p>
                        <input className="campo" type="email" placeholder="Username or Email"/>
                        <input className="campo" type="password" placeholder="Password"/>
                        <a href="#">Forgot Password?</a>
                        
                            <Link to='/admin'><input className="btn" type="submit" value="Acessar"/></Link>
                        

                        <p>Don't have an account? <button class="Register"><a href="#">Register now</a>.</button></p>
    
                    </form>
    
                </div>
    
            </div>
        </div>
    </body>
    );
}

export default login;