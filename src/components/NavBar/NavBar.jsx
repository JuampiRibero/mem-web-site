import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
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
              <Nav.Link
                to="/#home"
                onClick={() => window.location.replace("/#home")}
                className="navbar-a"
              >
                HOME
              </Nav.Link>
              <Nav.Link
                to="/#about-me"
                onClick={() => window.location.replace("/#about-me")}
                className="navbar-a"
              >
                SOBRE MI
              </Nav.Link>
              <Nav.Link
                to="/#services"
                onClick={() => window.location.replace("/#services")}
                className="navbar-a"
              >
                SERVICIOS
              </Nav.Link>
              <Nav.Link
                to="/#contact"
                onClick={() => window.location.replace("/#contact")}
                className="navbar-a"
              >
                CONTACTO
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
