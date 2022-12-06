import React from 'react'
import reciclar from "../images/icon-delete.svg"
import imagen from "../images/image-product-1-thumbnail.jpg"
import "../styles/_cart.scss"


function Cart({  cantidad, valorTotal, limpiarCarro, conCompras  }) {

    return (
    <div className='contenedor-cart'>
        <div className='titulo-cart'>
            <h2>Cart</h2>
        </div>
        <div className='cart-contenido'>
            <p className={`mensaje-vacio ${conCompras}`}>Your cart is empety</p>
            <div className={`contenedor-carro ${conCompras}`}>
                <div className='contenido-texto'>
                    <img className='miniatura' src={imagen} alt="imagen producto" />
                    <div className='descrip'>
                        <p className='descripcion-cart'>Fall Limited Edition Sneakers</p>
                        <p className='precio-cart'>$125.00 x {cantidad} <span className='valor-cart'>${valorTotal}.00</span> </p>
                    </div>
                    <img className='icon-delete' src={reciclar} alt="icon eliminar" onClick={limpiarCarro} />
                </div>
                <button id='btn-cart'>Checkout</button>
            </div>
        </div>
        
    </div>
  )
}

export default Cart;