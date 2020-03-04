import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


function isConnected() {
  if (localStorage.getItem('Login')) {
   return <Nav.Link href="/login">{ localStorage.getItem('Login') }</Nav.Link>
}
else {
  return <> <Nav.Link href="/login">Login</Nav.Link> <Nav.Link href="/authent">Authentification</Nav.Link> </>
}
}

function NavBar() {

  return (
<Navbar fixed="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Navbar.Brand href="/">Dashboard</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      { isConnected() }
      <Nav.Link href="/dashboard">Dashboard</Nav.Link>  
    </Nav>
  </Navbar.Collapse>
</Navbar>

  );
}

export default NavBar;