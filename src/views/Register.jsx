import { useState } from 'react'
import { Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const [validated, setValidated] = useState(false)
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const handleReturn = () => {
        navigate('/')
    }

    const handleRegister = (e) => {
        e.preventDefault()
        const userRegister = {
            name: e.target[0].value,
            lastname: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value,
          
            telephone: e.target[5].value,
            birthdate: e.target[6].value
        }

        if (userRegister.name === '' || userRegister.lastname === '' || userRegister.email === '' || userRegister.password === '' || e.target[4].value === '' || userRegister.telephone === '' || userRegister.birthdate === '') {
            setMessage('Todos los campos son obligatorios')
            setValidated(true)
            return
        }

        if (userRegister.password !== e.target[4].value) {
            setMessage('Las contraseñas no coinciden')
            setValidated(true)
            return
        }
        setValidated(false)
        setMessage('')

        const sendUserRegister = async (userRegister) => {
            console.log(userRegister)
            try {
                const response = await fetch('https://api-token-products.onrender.comapi/auth/signUp')
                const data = await response.json()
                console.log(data)
                if (data.ok) {
                    setMessage('Usuario registrado correctamente')
                    setValidated(true)
                    setTimeout(() => {
                        navigate('/login')
                    }
                        , 3000)
                }

            } catch (error) {
                console.log(error)
            }

        }
        sendUserRegister(userRegister)

    }
    return (
        <Row>

            <Col md={{ span: 8, offset: 2 }}>
                <Form.Group className='mb-3'>
                    <Form.Label>
                        <Button variant='primary' onClick={handleReturn}>Volver</Button>
                    </Form.Label>
                </Form.Group>
                <h2>Registrate</h2>
                {
                    validated && <Alert variant='danger'>{message}</Alert>
                }
                <Col>

                </Col>
                <Form
                    onSubmit={handleRegister}>
                    <Row>
                        <Col>

                            <Form.Group className='mb-3'>
                                <Form.Label>
                                    Nombre
                                </Form.Label>
                                <Form.Control type='text' placeholder='Ingresa tu nombre '>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>

                            <Form.Group className='mb-3'>
                                <Form.Label>
                                    Apellidos
                                </Form.Label>
                                <Form.Control type='text' placeholder='Apellidos '>
                                </Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className='mb-3'>
                                <Form.Label>
                                    Ingresa tu correo electronico
                                </Form.Label>
                                <Form.Control type='email' placeholder='Ingresa tu correo electronico '>
                                </Form.Control>

                            </Form.Group>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className='mb-3'>
                                <Form.Label>
                                    Ingresa tu contraseña
                                </Form.Label>
                                <Form.Control type='password' placeholder='Ingresa tu contraseña '>
                                </Form.Control>

                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className='mb-3'>
                                <Form.Label>
                                    Repite tu contraseña
                                </Form.Label>
                                <Form.Control type='password' placeholder='Repite tu contraseña '>
                                </Form.Control>

                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className='mb-3'>
                                <Form.Label>
                                    Ingresa tu numero de telefono
                                </Form.Label>
                                <Form.Control type='text' placeholder='Ingresa tu numero de telefono '>
                                </Form.Control>

                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className='mb-3'>
                                <Form.Label>
                                    Fecha de nacimiento
                                </Form.Label>
                                <Form.Control type='date' placeholder='Ingresa tu nombre '>
                                </Form.Control>

                            </Form.Group>
                        </Col>




                    </Row>

                    <Row>

                        <Col>
                            <Form.Group className='mb-3'>
                                <Form.Label>
                                    <Button variant='success'
                                        type='submit'>Registrarse</Button>
                                </Form.Label>
                            </Form.Group>
                        </Col>
                    </Row>

                </Form>



            </Col>

        </Row>

    )
}

export default Register