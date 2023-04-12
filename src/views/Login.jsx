import { Form, Button, Col, Row, Alert, Card } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from "react-router-dom"
import imgLogin from '../assets/img/login.jpg'
import { useDispatch } from 'react-redux'

import {obtenerUsuarioAction} from '../actions/usuarioActions'

const Login = () => {
  const [alert, setAlert] = useState('')
  const [validado, setValidado] = useState(false)
  const dispatch = useDispatch()

  const obtenerUsuario = (dataUser) => dispatch(obtenerUsuarioAction(dataUser))

  const handleLogin = (e) => {
    e.preventDefault()

    const dataUser = {
      email: e.target[0].value,
      password: e.target[1].value

    }
    if (dataUser.email === '' || dataUser.password === '') {
      setAlert('Todos los campos son obligatorios')
      setValidado(true)
      return
    }
    setValidado(false)
    console.log(dataUser)
    obtenerUsuario(dataUser)


  }

  return (
    <Row
       //padding
       className="m-5">
     
      <Col 
        xs={6}
      >

        <h1>Iniciar Sesión</h1>
        {
          validado && <Alert variant="danger">
            {alert}
          </Alert>
        }
        <Form
          onSubmit={handleLogin}
        >

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control type="email" placeholder="example@gmail.com" />
            <Form.Text className="text-muted">
              Nunca compartiremos su correo electrónico con nadie más.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" />
            <Form.Text className="text-muted">
              No compartas tu contraseña con nadie más.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" className='m-4' type="submit">
            Ingresar
          </Button>
        </Form>

        <Card.Body>
          <Link to="/registro">Registrate</Link>
          <Link to="/olvide-password">Olvidaste tu contraseña?</Link>

        </Card.Body>


      </Col>
      <Col
        xs={6}
      >
        <img src={imgLogin} alt="login"
          className='img-fluid'

        />
      </Col>
 
      
      
   
    </Row>
  )
}

export default Login