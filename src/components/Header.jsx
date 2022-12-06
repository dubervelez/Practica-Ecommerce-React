import React from 'react';
import menu from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import carroCompras from "../images/icon-cart.svg";
import login from "../images/image-avatar.png";
import logoCerrarMenu from "../images/icon-close.svg";

import "../styles/_header.scss";
import { useState } from "react";

function Header({ mostrarCompras, cantidad, alertm }) {

    const [menus, setMenu] = useState(false);
    function desplegarMenu() {
        setMenu(true);
    };
    function cerrarMenu() {
        setMenu(false);
    };

  return (
    <header>
        <nav>
            <img className="logo-menu" src={menu} alt="logo menu" onClick={desplegarMenu}/>
            <img className="logo-sneakers" src={logo} alt="logo Sneakers" />
            <div className={`nav-menu ${menus ? "activo": "" }`}>
                <img className='logo-cerrar-menu' src={logoCerrarMenu} alt="logo cerrar menu" onClick={cerrarMenu}/>
                <ul className="nav-ul">
                    <li className="nav-ul__li">Collections</li>
                    <li className="nav-ul__li">Men</li>
                    <li className="nav-ul__li">Women</li>
                    <li className="nav-ul__li">About</li>
                    <li className="nav-ul__li">Contact</li>
                </ul>
            </div>
        </nav>
        <div className="login">
            <span className={`alerta ${alertm}`}>{cantidad}</span>
            <img className='logo-carro' src={carroCompras} alt="carro compras" onClick={mostrarCompras}/>
            <img className='avatar' src={login} alt="avatar " />
        </div>
    </header>
  )
}

export default Header