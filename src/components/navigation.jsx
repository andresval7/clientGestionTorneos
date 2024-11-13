import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

export function Navigation(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to="/">Gestión Torneos</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/torneos">Torneos</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/torneos-add">Nuevo Torneo</Link></Nav.Link>
            
            <Nav.Link><Link to="/equipos">Equipos</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/equipos-add">Nuevo equipo</Link></Nav.Link>

            <Nav.Link href="#link2"><Link to="/encuentros">Encuentros</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/encuentros-add">Nuevo encuentro</Link></Nav.Link>

            <Nav.Link href="#link2"><Link to="/participan">Resultados-Participaciones</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/participan-add">Nuevo resultado</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}