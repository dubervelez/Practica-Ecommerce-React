import React, { Children } from 'react'
import carroCompras from "../images/icon-cart.svg";
import "../styles/_pay.scss";
import agregar from "../images/icon-plus.svg"
import eliminar from "../images/icon-minus.svg"


function Pay({ children, agregarProducto, eliminarProducto, cargarProducto }) {
  return (
    <div className='contenedor-producto'>
        <div className='descripcion-producto'>
            <span className='subtitulo'>Sneaker Company</span>
            <h1 className='titulo'>Fall Limited Edition Sneakers</h1>
            <p className='descripcion'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, theyll withstand everything the weather can offer.
            </p>
            <div className='contenedor-precio'>
                <p className='precio'>$125.00 <span className='descuento' >50%</span></p>
                <p className='precio-anterior'>$250.00</p>
            </div>
        </div>
        <div className='contenedor-eleccion'>
            <div className='resumen-compra'>
                <img className='quitar-producto' src={eliminar} alt="icon eliminar" onClick={eliminarProducto}/>
                <p className='cantidad-producto'>{children}</p>
                <img className='agregar-producto' src={agregar} alt="icon agregar" onClick={agregarProducto}/>
            </div>
            <button onClick={cargarProducto}>
                <img src={carroCompras} alt="logo carro de compras" />
                Add to cart
            </button>
        </div>
    </div>
  );

}
export default Pay;