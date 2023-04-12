import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Alerta from './Alerta';
import { useDispatch, useSelector } from 'react-redux';

//action Redux

import { crearNuevoProductoAction}  from '../actions/productoActions'


const ModalAgregarProducto = ({ mostrar, setMostrar }) => {
    const state = useSelector(state => state)
    const error = useSelector(state => state.productos.error)
  
    
    const [valid, setValid] = useState(false)
    const [text, setText] = useState("")
    const [variant, setVariant] = useState("")
    const dispatch = useDispatch()

    const handleClose = () => {
        setMostrar(false)
    }

    const agregarProducto = (nuevoProducto) => dispatch(crearNuevoProductoAction(nuevoProducto))

    const handleSubmit = (e) => {
        e.preventDefault()

        const nuevoProducto = {
            nombreProducto: e.target[1].value,
            precio: e.target[2].value,
            categoria: e.target[3].value,
            imagen: e.target[4].value,
            comentario: e.target[5].value

        }
    
        if(nuevoProducto.nombreProducto === "" || nuevoProducto.precio === "" || nuevoProducto.categoria === "" || nuevoProducto.comentario === ""){
            setVariant('danger')
            setValid(true)
            setText("Todos los campos son obligatorios")
            return
        }

        if(nuevoProducto.precio <= 0){
            setVariant('danger')
            setValid(true)
            setText("El precio debe ser mayor a 0")
            return
        }
   
      


        setValid(false)
        setText("")
    
        agregarProducto(nuevoProducto)
        handleClose()

    }


    return (
        <>
            <Modal show={mostrar} onHide={handleClose}>
                {valid&& <Alerta text={text} variant={variant} />}
                <Form
                    onSubmit={handleSubmit}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Nuevo Producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="formBasicNombre">
                            <Form.Label>Nombre producto</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa un nombre de producto" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPrecio">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" placeholder="Ingresa el precio del producto" />
                        </Form.Group>
                        <Form.Group controlId="formBasicNombre">
                            <Form.Label>Categoria</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa la categoria del producto" />
                        </Form.Group>
                       
                        <Form.Group controlId="formBasicGuardarFile">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control type="file" placeholder="Ingresa la imagen del producto" />
                        </Form.Group>

                        <Form.Group controlId="formBasicNombre">
                            <Form.Label>Ingresa un comentario adicional</Form.Label>
                            <Form.Control type="text" placeholder="Comentario del producto" />
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button variant="primary" type="submit">
                            Guardar cambios
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </>
    )
}



export default ModalAgregarProducto