import { Link, Outlet } from "react-router-dom"
import { Row, NavDropdown, } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import ModalAjustes from "../components/ModalAjustes"
import Footer from './Footer'
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/img/logo.jpg"
import { useState } from "react"


const Layout = () => {
    const [mostrar, setMostrar] = useState(false)
    const navigate = useNavigate()
    const handleShow = () => {
        navigate('registro')

    }
    const handleLogin = () => {
        navigate('iniciar-sesion')
    }

    return (
        <>
            <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} width="150vh" height="150vh" className="d-inline-block align-top" alt="logo" loading="lazy" />
                        </Link>
                    </li>
                </ul>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="productos">Productos</Link>
                        </li>

                        <li className="nav-item">
                        <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                                <Link className="nav-link" to="pantalones"> Pantalones </Link>
                                <Link className="nav-link" to="camisas"> Camisas </Link>
                                <Link className="nav-link" to="bermudas"> Bermudas </Link>
                                <Link className="nav-link" to="camperas"> Camperas </Link>
                                <Link className="nav-link" to="remeras"> Remeras </Link>
                                <Link className="nav-link" to="accesorios"> Accesorios </Link>    
                        </NavDropdown>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contacto">Contacto</Link>
                        </li>
                    </ul>
                </div>
                <div >
                    <button type="button" className="btn btn-outline-primary m-2"
                        onClick={() => {
                            handleShow()
                        }}
                    >Registrarse</button>
                    <button type="button" className="btn btn-outline-primary"
                        onClick={() => {
                            handleLogin()
                        }
                        }
                    >Iniciar Sesión</button>
                    <button type="button" className="btn btn-outline-primary m-2"
                        onClick={
                            () => {
                                setMostrar(true)
                        }
                        }
                    >Configuración</button>

                </div>

            </Navbar>
            {mostrar && <ModalAjustes 
                setMostrar={setMostrar}
                mostrar={mostrar}
            />}
                        
                
                        
            <Outlet />
            <Footer />
        </>
    )
}


export default Layout