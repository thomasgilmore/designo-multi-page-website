import './title.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../assets/shared/desktop/logo-dark.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Title() {
  return (
    <Navbar className='navigationBar' expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/"><img src={logoDark} style={{ width: 250 }} alt="Designo Logo" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navItems">
            <Nav.Link as={Link} to="/about">Our Company</Nav.Link>
            <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
