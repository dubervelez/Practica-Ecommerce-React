import React from 'react';
import menu from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import carroCompras from "../images/icon-cart.svg";
import login from "../images/image-avatar.png";
import cerrarMenu from "../images/icon-close.svg";

import "../styles/_header.scss";

function Header() {
  return (
    <header>
        <nav>
            <img className="logo-menu" src={menu} alt="logo menu" />
            <img className="logo-sneakers" src={logo} alt="logo Sneakers" />
            <div className='nav-menu'>
                <img className='logo-cerrar-menu' src={cerrarMenu} alt="logo cerrar menu" />
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
            <img className='logo-carro' src={carroCompras} alt="carro compras" />
            <img className='avatar' src={login} alt="avatar " />
        </div>
    </header>
  )
}

export default Header