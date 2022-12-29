import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/martini.svg";

import { LogoContainer, NavLinks, WebsiteName } from "./navigation.styles.jsx";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  return (
    <div>
      <div>
        <Navbar bg="dark">
          <LogoContainer>
            <Navbar.Brand className="logo" href="/">
              <Logo />
              <WebsiteName>Bottoms Up</WebsiteName>
            </Navbar.Brand>
          </LogoContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLinks>
                <Nav.Link href="ingredients">By Ingredients</Nav.Link>
                <Nav.Link href="name">By Name</Nav.Link>
                <Nav.Link href="random">Random</Nav.Link>
                <Nav.Link href="signin">Sign In</Nav.Link>
              </NavLinks>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
