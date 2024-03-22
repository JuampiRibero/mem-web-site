import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar-bg" >
        <Container >
        <Link to="/">
            <img
              src="https://i.ibb.co/6nC8sbB/logo-navbar-l.png"
              width="150"
              height=""
              className="d-inline-block align-top logo"
              alt="Logo MEM"
              title="MEM"
              loading="lazy"
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#sobre-mi">Sobre mi</Nav.Link>
              <Nav.Link href="#servicios">Servicios</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;