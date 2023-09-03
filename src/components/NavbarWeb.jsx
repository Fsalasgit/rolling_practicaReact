import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';




const NavbarWeb = () => {
  return (
    <>      
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <NavLink to="/" className="logoPrincipal"><FaReact size={30}/></NavLink>
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link link">Home</NavLink>
              <NavLink to="/" className="nav-link link"><FaReact/></NavLink>
              <NavLink to="/" className="nav-link link">Home</NavLink>
            </Nav>
            </Container>
        </Navbar>
    </> 
  )
}

export default NavbarWeb