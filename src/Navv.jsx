import React from 'react';

import logo from './img/logo.png';
import {NavLink} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';









function Navv(){

    return(
<>

<header id="header" >
    <div className="container">
    
     {/* <nav id="navbar" className="navbar">
    
        <ul>
       
       
          <li><NavLink className="nav-link " to="/" >Home</NavLink></li>
          <li><NavLink className="nav-link" to="/about"  >About</NavLink></li>
          <li><NavLink className="nav-link " to="/services">Services</NavLink></li>
          <li><NavLink className="nav-link " to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink className="nav-link " to="/team">Team</NavLink></li>
          <li><NavLink className="nav-link " to="/contact">Contact</NavLink></li>

        </ul>
        <i class="bi bi-list mobile-nav-toggle"  ></i>
 
      </nav>*/}
  <Navbar  collapseOnSelect  bg="light" expand="lg">
  <Container>
  <Navbar.Brand href="/">
  <div className="logo">
      <img
      height="80"
      width="40"
        src={logo}
        alt="logo"
      />
    </div>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
     
    
   
      <Nav.Link><NavLink className="nav-link" to="/">Home</NavLink></Nav.Link>
      <Nav.Link> <NavLink className="nav-link" to="/about">About</NavLink></Nav.Link>
      <Nav.Link> <NavLink className="nav-link" to="/services">Services</NavLink></Nav.Link>
      <Nav.Link><NavLink className="nav-link" to="/portfolio">Portfolio</NavLink></Nav.Link>
      <Nav.Link><NavLink className="nav-link" to="/team">Team</NavLink></Nav.Link>
      <Nav.Link> <NavLink className="nav-link" to="/contact">Contact</NavLink></Nav.Link>


      </Nav>
    </Navbar.Collapse>
  </Container>
   
</Navbar>
</div>
</header>

   
 



</>
    );
}
export default Navv;