import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Tabs({ currentTab, handleTabChange }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#about"
              className={`items ${
                currentTab === "AboutMe" ? "nav-link active" : "nav-link"
              }`}
              onClick={() => handleTabChange("AboutMe")}
            >
              AboutMe
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              className={`items ${
                currentTab === "Portfolio" ? "nav-link active" : "nav-link"
              }`}
              onClick={() => handleTabChange("Portfolio")}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={`items ${
                currentTab === "Contact" ? "nav-link active" : "nav-link"
              }`}
              onClick={() => handleTabChange("Contact")}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="#resume"
              className={`items ${
                currentTab === "Resume" ? "nav-link active" : "nav-link"
              }`}
              onClick={() => handleTabChange("Resume")}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Tabs;
