import { Button,Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import ModalAgregarProducto from '../components/ModalAgregarProducto';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MostrarProductos from '../components/MostrarProductos';
const Productos = () => {
  const [mostrar,setMostrar] =useState(false)



  return (

    <>
   
    <Button
      className="btn  m-1"                
      type='button'
      onClick={()=>{
        setMostrar(true)
      }}
    >
      Agregar Producto +
    </Button>
    <ModalAgregarProducto
    mostrar={mostrar}
    setMostrar={setMostrar}
    />
   <MostrarProductos/>
    </>
  );
}



export default Productos