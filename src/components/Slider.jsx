import React from 'react'
import btnImage1 from "../images/image-product-1-thumbnail.jpg"
import btnImage2 from "../images/image-product-2-thumbnail.jpg"
import btnImage3 from "../images/image-product-3-thumbnail.jpg"
import btnImage4 from "../images/image-product-4-thumbnail.jpg"
import producto1 from "../images/image-product-1.jpg"
import producto2 from "../images/image-product-2.jpg"
import producto3 from "../images/image-product-3.jpg"
import producto4 from "../images/image-product-4.jpg"
import next from "../images/icon-next.svg"
import prev from "../images/icon-previous.svg"
import "../styles/_slider.scss"
import {useState} from "react";


function Slider({mostrarModal}) {
  
    const [producto, setProducto] = useState(producto1)
    const [btnactivo1, setbtnActivo1] = useState (true)
    const [btnactivo2, setbtnActivo2] = useState (false)
    const [btnactivo3, setbtnActivo3] = useState (false)
    const [btnactivo4, setbtnActivo4] = useState (false)
    function next(productos, btn) {
        setProducto(productos)
        setbtnActivo1(false)
        setbtnActivo2(false)
        setbtnActivo3(false)
        setbtnActivo4(false)
        btn(true)
    }
    
    const lista = [producto1, producto2, producto3, producto4];
    const nextmobile = ()=>{
        for (let i = 0; i < lista.length; i++) {
            let posicion = 0;
            if (producto === lista[i]) {
                posicion = Math.min(i, 2);
                setProducto(lista[posicion+1]) 
            }
        }
    }
    const prevmobile = ()=>{
        for (let i = 0; i < lista.length; i++) {
            let posicion = 0;
            if (producto === lista[i]) {
                posicion = Math.max(i, 1);
                setProducto(lista[posicion-1]) 
            }
        }
    }


    return (

    <section className='slider'>
        <div className="imagen-activa">
            <img className='img-producto' src={producto} alt="imagen producto" onClick={mostrarModal}/>
            <div className='btn-prev'>
                <img  src={prev} alt="boton siguiente" onClick={prevmobile}/>
            </div>
            <div className='btn-next'>
                <img src={next} alt="boton retroceder" onClick={nextmobile} />  
            </div>
        </div>
        <div className="btn-slider">
            <img className={`btn-img ${btnactivo1 ? "activo": "" }`} src={btnImage1} alt="imagen miniatura producto"  onClick={()=>{next(producto1, setbtnActivo1)}} />
            <img className={`btn-img ${btnactivo2 ? "activo": "" }`} src={btnImage2} alt="imagen miniatura producto" onClick={()=>{next(producto2, setbtnActivo2)}}/>
            <img className={`btn-img ${btnactivo3 ? "activo": "" }`} src={btnImage3} alt="imagen miniatura producto" onClick={()=>{next(producto3, setbtnActivo3)}}/>
            <img className={`btn-img ${btnactivo4 ? "activo": "" }`} src={btnImage4} alt="imagen miniatura producto" onClick={()=>{next(producto4, setbtnActivo4)}}/>
        </div>
    </section>
  )
}

export default Slider