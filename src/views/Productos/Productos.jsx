import { Button,Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import ModalAgregarProducto from '../../components/ModalAgregarProducto';
import { useState } from 'react';
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
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre </th>
          <th>Precio</th>
          <th>Categorias</th>
          <th>Comentarios</th>
          <th>Imagenes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>850</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>500</td>
          <td>@Bueno en general</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>700</td>
          <td>Excelente producto</td>
        </tr>
      </tbody>
    </Table>
    </>
  );
}



export default Productos