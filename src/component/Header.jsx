import React, { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("beranda");
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) setScrolled(isScrolled);

      const sections = ["beranda", "tentang", "project", "footer"];
      let current = activeLink;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const top = rect.top;
          const bottom = rect.bottom;
          const middle = window.innerHeight / 2; // titik tengah viewport

          if (top <= middle && bottom >= middle) {
            current = section;
            break;
          }
        }
      }

      if (current !== activeLink) setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, activeLink]);

  // Handle smooth scroll
  const handleNavClick = (link) => {
    setActiveLink(link);
    setIsOffcanvasOpen(false);

    const element = document.getElementById(link);
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle navbar toggle animation
  const handleToggle = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          className={`navbar ${scrolled ? "navbar-scrolled" : ""} ${
            isOffcanvasOpen ? "offcanvas-open" : ""
          }`}
          data-bs-theme="light"
          expand="md"
          fixed="top"
        >
          <Container fluid className="container">
            <Navbar.Brand
              className={`Navbar-Brand ${scrolled ? "scrolled" : ""}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("beranda");
              }}
            >
              <b>
                Porto<span>folio</span>
              </b>
            </Navbar.Brand>

            {/* Animated hamburger menu */}
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className={`navbar-toggler ${isOffcanvasOpen ? "open" : ""}`}
              onClick={handleToggle}
            >
              <span className="navbar-toggler-icon">
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
                <span className="bar bar3"></span>
              </span>
            </Navbar.Toggle>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={isOffcanvasOpen}
              onHide={() => setIsOffcanvasOpen(false)}
              className="offcanvas-nav"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  className="offcanvas-title"
                >
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="offcanvas-body-animated">
                <Nav className="justify-content-end flex-grow-1 pe-3 gap-5 nav-underline">
                  <Nav.Link
                    href="#beranda"
                    className={`nav-link-custom ${
                      activeLink === "beranda" ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("beranda");
                    }}
                  >
                    <b>
                      <span className="link-text">Beranda</span>
                      <span className="link-underline"></span>
                    </b>
                  </Nav.Link>
                  <Nav.Link
                    href="#tentang"
                    className={`nav-link-custom ${
                      activeLink === "tentang" ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("tentang");
                    }}
                  >
                    <b>
                      <span className="link-text">Tentang</span>
                      <span className="link-underline"></span>
                    </b>
                  </Nav.Link>
                  <Nav.Link
                    href="#project"
                    className={`nav-link-custom ${
                      activeLink === "project" ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("project");
                    }}
                  >
                    <b>
                      <span className="link-text">Project</span>
                      <span className="link-underline"></span>
                    </b>
                  </Nav.Link>
                  <Nav.Link
                    href="#footer"
                    className={`nav-link-custom ${
                      activeLink === "footer" ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("footer");
                    }}
                  >
                    <b>
                      <span className="link-text">footer</span>
                      <span className="link-underline"></span>
                    </b>
                  </Nav.Link>
                </Nav>

                {/* Optional: Add social icons in mobile menu */}
                <div className="mobile-social-icons mt-4 d-md-none">
                  <a href="#" className="social-icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
