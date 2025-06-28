import React , { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css"; // Import the CSS
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Nav_bar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <Navbar
      expand="lg"
      className={`glass-navbar fixed-top shadow-sm ${isScrolled ? "scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-orange">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="logo"
            width="30"
            height="30"
            className="me-2"
          />
          CAPS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="fw-semibold text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="fw-semibold text-white">
              Services
            </Nav.Link>

            <Nav.Link as={Link} to="/alumni" className="fw-semibold text-white">
              Alumni
            </Nav.Link>
            <Nav.Link as={Link} to="/join-us" className="fw-semibold text-white">
              Join Us
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="fw-semibold text-white">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default Nav_bar;
