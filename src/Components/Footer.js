import './footer.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoLight from '../assets/shared/desktop/logo-light.png';
import iconFacebook from '../assets/shared/desktop/icon-facebook.svg';
import iconInstagram from '../assets/shared/desktop/icon-instagram.svg';
import iconPinterest from '../assets/shared/desktop/icon-pinterest.svg';
import iconTwitter from '../assets/shared/desktop/icon-twitter.svg';
import iconYouTube from '../assets/shared/desktop/icon-youtube.svg';

export default function Footer() {
  return (
    <span>
      <Navbar expand="lg" className='footerNav' variant="dark">
        <Container className='footerTitle'>
          <Navbar.Brand href="#home">
            <img src={logoLight} style={{ width: 250 }} alt="Designo Logo" />
          </Navbar.Brand>
            <Nav className="footerNavItems">
              <Nav.Link href="#home">Our Company</Nav.Link>
              <Nav.Link href="#link">Locations</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <div className='footerNav'>
        <Container className='footerTextContainer'>
          <div className='footerText'>
            <p>Designo Central Office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className='footerText'>
            <p>Contact Us (Central Office)</p>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
          <div className='footerSocial'>
            <img src={iconFacebook} style={{ width: 30, height: 30 }} alt="Facebook Icon" />
            <img src={iconYouTube} style={{ width: 30, height: 30 }} alt="YouTube Icon" />
            <img src={iconTwitter} style={{ width: 30, height: 30 }} alt="Twitter Icon" />
            <img src={iconPinterest} style={{ width: 30, height: 30 }} alt="Pinterest Icon" />
            <img src={iconInstagram} style={{ width: 30, height: 30 }} alt="Instagram Icon" />
          </div>
        </Container>
      </div>
    </span>
  )
}
