import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FormSelect } from 'react-bootstrap';
import Alerta from './Alerta';
import sendUpdate from '../helpers/index.js';


const ModalAgregarProducto = ({
    mostrar, setMostrar
}) => {

    const [valid, setValid] = useState(false)
    const [text, setText] = useState("")
    const handleClose = () => {
        setMostrar(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: e.target[1].value,
            role: e.target[2].value,
        }


    }


    return (
        <>
            <Modal show={mostrar} onHide={handleClose}>
                {valid && <Alerta text={text} />}
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
                        <Form.Group>
                            <Form.Label
                                for="formFileSm" className="form-label">
                                Sube la imagen del producto
                                <input className="form-control form-control-sm" id="formFileSm" type="file" name='fileUpload' />
                            </Form.Label>
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