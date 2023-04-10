import { useEffect } from 'react'
import img from '../assets/img/index.jpg'
import { Row, Col, Card } from 'react-bootstrap'
import { useContext } from 'react'
import ProductosContext from '../context/ProductosProvider'
import { useState } from 'react'

const Index = () => {
    const { getProducts } = useContext(ProductosContext)
    const [products, setProducts] = useState([])

   useEffect(() => {
        getProducts().then((data) => setProducts(data))
     

    },[])

console.log("productos",products)
    return (
        <>
            <Row>
                <h1
                    style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '3rem',
                        position: 'absolute',
                        top: '30%',
                        left: '-35%',
                    }}

                >¡Bienvenido a la
                    <br />
                    <span
                        style={{
                            color: 'white',
                            fontSize: '4rem',
                            fontWeight: 'bold',
                        }}
                    >   Tienda
                        <br />
                        Online!
                    </span>


                </h1>
                <Col
                    style={{ backgroundColor: '#003366', height: '95vh' }}
                >

                </Col>
                <div
                    style={{
                        backgroundColor: 'white',
                        width: '50%',
                        borderRadius: '10px',
                        position: 'absolute',
                        top: '60%',
                        left: '25%',
                    }}
                >
                    <h1
                        style={{ textAlign: 'center', color: 'black', fontSize: '3rem' }}
                    >   50%
                        Descuento
                        <br />
                        en tu primera compra
                        <br />
                        ¡Registrate
                        para obtener tu cupón!
                    </h1>
                </div>
                <Col
                    style={{ backgroundColor: '#884507', height: '80vh' }}>

                </Col>
            </Row>
            <Row>
                {
                    products.map((product) => {
                        return (
                            <Col key={product._id} >
                                <Card>
                                    <Card.Img variant="top" src={product.imgURL} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>
                                            {product.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Por tan solo  ${product.price}.00</small>
                                    </Card.Footer>

                                </Card>

                            </Col>
                        )
                    }
                    )
                }
         
            
                    <Row>

                    <Col 
                    style={{ backgroundColor: '#003366', height: '80vh',borderRadius:'10px' }}

                    >
                        <Card
                                style={{ width: '100%', height: '100%',opacity: '0.8'   }}                   
                            >
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                                </Card>
                        </Col>
                        <Col 
                    style={{ backgroundColor: 'white', height: '80vh' }}
                    >
                        <h2
                        style={{ color: 'black', fontSize: '3rem',
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold',
                        position: 'absolute',
                        top: '',
                        left: '',
                        bottom: '-120%',
                        right: '1%',}}
                        >
                            Las mejores ofertas en ropa 
                            <br />
                            <span style={{color:'#003366'}}>para toda la familia</span>
                            <br />
                            <span style={{color:'red'}}>¡Registrate para obtener tu cupón!</span>
                        </h2>
                        </Col>
                    </Row>
                    
                   
                
            </Row>
           

        </>

    )
}

export default Index