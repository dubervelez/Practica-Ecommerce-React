import React from 'react'
import Slider from "./Slider"
import close from "../images/icon-close.svg"
import "../styles/_modal.scss"

function Modal({cerrarmodal}) {
  return (
    <div className="container-modal">
        <div className='modal'>
            <img className='cerrar-modal' src={close} alt="icon cerrar" onClick={cerrarmodal} />
            <Slider></Slider>
        </div>
    </div>
  )
}

export default Modal