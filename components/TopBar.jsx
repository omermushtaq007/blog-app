import Image from 'next/image';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown, Stack } from 'react-bootstrap';

export default function TopBar() {
  return (
    <Navbar bg="light" className="border-2 border-bottom" expand="lg">
      <Container>
        {/* <Stack direction="horizontal" gap={3}> */}
        <Navbar.Brand className="d-flex gap-2">
          <Image src="/earth.svg" alt="" width="50" height="50" />
          <span className="text-dark fs-2 ml-2 align-items-center">
            <strong>Posting Home</strong>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="/icons/bars-solid.svg" />
        {/* </Stack> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-lg-3">
            {/* Home */}
            <Nav.Link href="#home">Home</Nav.Link>
            {/* Link */}
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <div className="vr" />
            <Button variant="light" onClick={() => console.log(`Login`)}>
              Login
            </Button>
            <Button variant="primary" onClick={() => console.log(`Register`)}>
              Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
