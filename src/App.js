import './styles/App.scss';
import Header from './components/Header';
import Slider from './components/Slider';
import Pay from "./components/Pay";
import Modal from './components/Modal';
import Cart from './components/Cart';
import { useState } from 'react';



function App() {
  
// Funcionalidad para mostrar y cerrar el modal
  const [modal, setModal] = useState(false);
  const mostrarModal = ()=>{
    setModal(true);
  };
  const cerrarModal = ()=>{
    setModal(false);
  };

  //funcionalidad de los botenes para agregar o eliminar un producto
  const [cantidad, setCantidad] = useState(0);
  const agregar = ()=>{
    setCantidad(cantidad + 1);
  };
  const eliminar = ()=>{
    if (cantidad >= 1){
      setCantidad(cantidad-1);
    };
  };
  
  const [precioTotal, setPrecioTotal] = useState(0);
  const [compras, setCompras] =useState("");
  const guardarProducto = ()=>{
    setPrecioTotal(120 * cantidad)
    console.log(precioTotal)
    if (cantidad > 0) {
      setCompras("activo")
    }else{
      setCompras("")
    }
  }

  // borrar compras mediante icono de borrar
  const eliminarCompras = ()=>{
    setCompras("")
  }

  // mostrar elementos del carrito de compras
  const [cart, setCart] = useState(false);
  const mostrarCart = ()=>{
    if (cart) {
      setCart(false)
    }else{
      setCart(true)
    }
  }
  


  return (
    <div className="App">
      <Header mostrarCompras={mostrarCart} cantidad={cantidad} alertm={compras}></Header>
      <main>
        <Slider mostrarModal={mostrarModal}></Slider>
        <Pay agregarProducto={agregar} eliminarProducto={eliminar} cargarProducto={guardarProducto}>
        {cantidad}
        </Pay>
        {
          cart && (<Cart cantidad={cantidad} valorTotal={precioTotal} conCompras={compras} limpiarCarro={eliminarCompras}></Cart>)
        };
        
      </main>
      {
       modal &&( <Modal cerrarmodal={cerrarModal} ></Modal>)
      };
      
    </div>
  );
}

export default App;
