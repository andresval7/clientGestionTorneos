import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export function NavBarInicio() {

     // Estilos personalizados para el botón hamburguesa
     const customToggleStyle = {
        borderColor: 'transparent', // Sin borde
        backgroundImage: "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255,1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")",
    };

    return (
        <Navbar expand="lg" style={{ backgroundColor: '#202122' }}>
            <Container>
                {/* Marca y nombre de la aplicación */}
                <Navbar.Brand as={Link} to="/" style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
                Gestión Toneos
                </Navbar.Brand>
                
                {/* Botón del menú hamburguesa para dispositivos pequeños */}
                <Navbar.Toggle aria-controls="basic-navbar-nav"   style={customToggleStyle}/>
                
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Links de navegación */}
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" style={{ color: '#FFFFFF' }}>Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/nosotros" style={{ color: '#FFFFFF' }}>Nosotros</Nav.Link>
                        <Nav.Link as={Link} to="/deportes" style={{ color: '#FFFFFF' }}>Deportes</Nav.Link>
                        <Nav.Link as={Link} to="/torneos" style={{ color: '#FFFFFF' }}>Torneos</Nav.Link>
                    </Nav>
                    
                    {/* Botón de acción */}
                    <Nav>
                        <Button as={Link} to="/register" style={{ backgroundColor: '#BE2B40', border: 'none', marginRight: '10px' }}>
                            Inscríbete  
                        </Button>
                        
                        <Button as={Link} to="/login/" style={{ backgroundColor: '#BE2B40', border: 'none' }}>
                            Inicia Sesión
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarInicio;