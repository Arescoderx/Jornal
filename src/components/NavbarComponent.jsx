import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";
import logo from "../assets/LogoSg.png";

export default function NavbarComponent() {
  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      sticky="top" // Adiciona a propriedade sticky
      className="mb-4 navbar-custom"
    >
      <Container className="position-relative">
        {/* Corrigido o href do logo */}
        <Navbar.Brand href="/"> 
          <img
            src={logo}
            alt="Jornal São Geraldo"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <div className="nav-center-wrapper">
            <Nav className="nav-center">
              <Nav.Link href="/">Início</Nav.Link>
              <Nav.Link href="/sobre">Sobre</Nav.Link>
              <Nav.Link href="/contato">Contato</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}