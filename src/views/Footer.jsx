import { Row, Col } from 'react-bootstrap';
import {FaJava ,FaGithub }from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
                <div className="row">
                    <Row style={{ color: "white"  }}  >
                        <Col
                            style={{ backgroundColor: '#884507', height: '25vh', textAlign: 'center',borderRadius: '10px'}}
                        >
                            <h5 className="text-uppercase ">Footer Content</h5>
                            <p>Creado por Martin Anzaldo y  Oscar Varela  </p>

                    <div 

                    style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", color: "white", }}
                 
                    >  <h4>Desarrollador Back End</h4>
                            <Link to="https://github.com/martzom" target="_blank" rel="noreferrer"  style={{
                                color: "white",
                                textDecoration: "none",
                                
                            }}>
                             <FaGithub 
                            style={{color: "white", fontSize: "2rem" }}
                             />   Martin Anzaldo
                            </Link>
                            <br />
                            <h4>Desarrollador Front End</h4>
                            <Link to="https://github.com/OscarVarelaDev" target="_blank" rel="noreferrer"  style={{
                                color: "white",
                                textDecoration: "none",
                                
                            }}>
                             <FaGithub 
                            style={{color: "white", fontSize: "2rem" }}
                             /> Oscar Varela
                            </Link>
                            
                            </div>
                          
                            <p>{
                                new Date().getFullYear()
                            }</p>

                        </Col>
                        

                    </Row>

                    <div className="col-md-12 mt-md-0 mt-3"

                    >


                    </div>

                </div>
           
        </div>





    )
}

export default Footer