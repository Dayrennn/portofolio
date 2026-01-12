import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";
function Header() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          className="navbar"
          data-bs-theme="light"
          expand="md"
          fixed="top"
        >
          <Container fluid className="container">
            <Navbar.Brand className="Navbar-Brand" href="#">
              <b>
                Porto<span>folio</span>
              </b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 gap-5 nav-underline">
                  <Nav.Link href="#beranda">
                    <b>Beranda</b>
                  </Nav.Link>
                  <Nav.Link href="#tentang">
                    <b>Tentang</b>
                  </Nav.Link>
                  <Nav.Link href="#project">
                    <b>Project</b>
                  </Nav.Link>
                  <Nav.Link href="#kontak">
                    <b>Kontak</b>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
