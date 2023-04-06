import { Link, Outlet } from "react-router-dom"
import { Row, Col } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"

const Layout = () => {
    const navigate = useNavigate()
    const handleShow = () => {
        navigate('registro')

    }
    const handleLogin = () => {
        navigate('iniciar-sesion')
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="navbar-brand" to="inicio">Logo</Link>
                    </li>
                </ul>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="inicio">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="ventas">Ventas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="catalogo-productos">Catalogo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="productos">Productos</Link>
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
                </div>
                
            </nav>
            <Outlet />
        </>
    )
}


export default Layout