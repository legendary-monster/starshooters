import React from 'react';
import '../App.css';
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Header = () => {
  return (
    <header>
      
      <Navbar expand="lg" className="bg-dark" variant="dark" style={{backgroundColor:"black"}}>
      <Container className='header-container' variant="dark">
        <Link to="/"><img src="/logo.jpeg" className='logo' alt='logo' height={"60px"} width={"60px"}/></Link>
        <Navbar.Brand href="/" className='Links'>Star Shooters</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className='Links'>Home</Nav.Link>
            <Nav.Link href="aboutUs" className='Links'>About Us</Nav.Link>
            {/* <Nav.Link href="/contact" className='Links'>Contact Us</Nav.Link> */}
            <Nav.Link href="/gallery" className='Links'>Gallery</Nav.Link>
            <NavDropdown title="Register" id="basic-nav-dropdown">
              <NavDropdown.Item href="/register" >Register for camp</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Register for club
              </NavDropdown.Item>
              <NavDropdown.Item href="/login">Players details</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}

export default Header;