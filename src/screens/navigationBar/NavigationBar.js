import React from "react";
import "./navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { navigationLinks } from "../../helpers/navigationLinks";
import { ImProfile } from 'react-icons/im';

// import ContactPageIcon from "@mui/icons-material/ContactPage";

function createLinks() {
  return navigationLinks.map((e, idx) => (
    <Nav.Link key={idx} href={e.ref}>
      {e.name}
    </Nav.Link>
  ));
}

function NavigationBar() {
  return (
    <div id="home">
      <Navbar
        className="navigation__container"
        style={{
          zIndex: "2",
          position: "fixed",
          top: "0",
          width: "100%",
        }}
        collapseOnSelect
        expand="md"
      >
        <Navbar.Brand style={{ marginLeft: "1rem" }} href="#home">
          Noy Flaysher
        </Navbar.Brand>
        <Navbar.Brand
          style={{ marginLeft: "5rem" }}
          href="https://www.docdroid.net/Mnk1Cle/noy-flaysher-316221043-cv-pdf"
          target="_blank"
        >
          {/* <ContactPageIcon size="lg" sx={{ fontSize: 35, color: "white" }} /> */}
          <ImProfile style={{ fontSize: "1.8rem" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          style={{
            justifyContent: "flex-end",
            marginRight: "1rem",
            borderColor: "none",
          }}
        >
          <Nav className="links" style={{ margin: "0 1rem" }}>
            {createLinks()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
