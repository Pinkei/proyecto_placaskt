import React from "react";
import "./navbar.css";

import {Container,Nav,Navbar} from 'react-bootstrap'
import { Outlet, Link, Route, Navigate } from "react-router-dom";

const Menu = () => {

    return (
        <>
        <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" >React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" >Home</Nav.Link>
              <Nav.Link as={Link} to="/intro" >Intro</Nav.Link>
              <Nav.Link as={Link} to="/contacto" >Contacto</Nav.Link>

{/* la linea que esta abajo es para que cuando escriban mal la ruta los redireccione al inicio */}
              <Route path="*" element={<Navigate replace to="/"/> } />
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

{/* contenido de la vista */}
      <section>
        <Outlet></Outlet>
      </section>
      </>
    );

};
export default Menu;
