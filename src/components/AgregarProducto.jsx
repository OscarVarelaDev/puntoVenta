import React from 'react'
import { Button, Form,Row,Col } from 'react-bootstrap'

const AgregarProducto = () => {
  const handleSubmit = () => {
    

  }
  return (
    <Row>
      <Col>
      <div>
        <h1>Agregar Producto</h1>
      </div>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control

            type="text"
            placeholder="Nombre del producto"
            name="nombre"


          />
          <Form.Group>
            <Form.Label>
              Precio
            </Form.Label>
          </Form.Group>
          <Form.Control
            type='number'
            placeholder='Precio del producto'
            name='producto'
          >

          </Form.Control>
        </Form.Group>

        <Form.Group>
            <Form.Label
            for="formFileSm" className="form-label">
              Sube tu imagen
            <input className="form-control form-control-sm" id="formFileSm" type="file" name='fileUpload' />
            </Form.Label>
        </Form.Group>
        <Form.Group>
            <Form.Label
            for="formFileSm" className="form-label">
              Sube tu imagen
            <input className="form-control form-control-sm" id="formFileSm" type="file" name='fileUpload' />
            </Form.Label>
        </Form.Group>

        <Form.Group>
          <Button>
            Agregar
          </Button>
        </Form.Group>

      </Form>
      </Col>
      <Col>
      </Col>
    </Row>


  )
}

export default AgregarProducto