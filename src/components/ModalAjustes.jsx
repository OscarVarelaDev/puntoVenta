import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FormSelect } from 'react-bootstrap';
import Alerta from './Alerta';

const ModalAjustes = ({ mostrar, setMostrar }) => {
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
        if (data.role === "Seleccionar") {
            setText("Debe seleccionar un rol valido")
            setValid(true)
        }
        else {
            sendUpdate(data)
        }

    }


    return (
        <>
            <Modal show={mostrar} onHide={handleClose}>
                {
                    valid && <Alerta text={text} />
                }
                <Form
                    onSubmit={handleSubmit}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Administrador</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value="oskr@gmail.com" disabled placeholder="Enter email" />
                            <Form.Text className="text-muted">
                             Correo electronico del usuario a modificar
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicRol">
                            <Form.Label>Rol</Form.Label>
                            <FormSelect aria-label="Default select example">
                                <option>Seleccionar</option>
                                <option>Administrador</option>
                                <option>Moderador</option>
                            </FormSelect>
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

export default ModalAjustes