import { useContext } from "react"
import ProductosContext from "../context/ProductosProvider"
import { Col, Row } from "react-bootstrap"
const Catalogo = () => {

    const {hola} = useContext(ProductosContext)
    return (

        <Row>
            <Col sm={2} md={2} lg={2} xl={2} xxl={2}>
                <h1>{hola}</h1>
            </Col>
            <Col>
            </Col>
        </Row>
    )
}

export default Catalogo