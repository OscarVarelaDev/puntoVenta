import { Form, Button, Row, Col, Card, Alert } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from "react-router-dom"
const OlvidePassword = () => {
    const [alert, setAlert] = useState('')
    const [validado, setValidado] = useState(false)

    const handdleOlvidePassword = (e) => {
        e.preventDefault()
        const email = e.target[0].value

        if (email === '') {
            setAlert('Todos los campos son obligatorios')
            setValidado(true)
            return
        }
        setValidado(false)
        sendEmail(email)
       

    }
    const sendEmail = async (email) => {
        try {
            const url = 'http://localhost:4000/api/olvidePassword'
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(email)
            })
            const data = await response.json()
            console.log(data)

        } catch (error) {
            console.log(error)

        }
    }

    return (
        <Row
         
        >
            <Col md={{ span: 8, offset: 2 }}>

                <h1>Olvide mi password</h1>
                {
                    validado && <Alert variant="danger">
                        {alert}
                    </Alert>
                }
                <Form
                    onSubmit={handdleOlvidePassword}
                >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control type="email" placeholder="example@gmail.com" />
                        <Form.Text className="text-muted">
                            Nunca compartiremos su correo electrónico con nadie más.
                        </Form.Text>
                    </Form.Group>


                    <Button variant="primary" className='m-4' type="submit">
                        Enviar correo
                    </Button>
                </Form>

                <Card.Body>
                    <Link to="/registro">Registrate</Link>
                    <Link to="/iniciar-sesion">Iniciar Sesión</Link>

                </Card.Body>


            </Col>
        </Row>
    )
}

export default OlvidePassword