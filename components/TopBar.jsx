import Image from 'next/image';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Stack } from 'react-bootstrap';

export default function TopBar() {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
        {/* <Stack direction="horizontal" gap={3}> */}
        <Navbar.Brand className="d-flex gap-2">
          <Image src="/earth.svg" alt="" width="50" height="50" />
          <span className="text-light fs-2 ml-2 align-items-center">
            <strong>Posting Home</strong>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="/icons/bars-solid.svg" />
        {/* </Stack> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">
              <Image
                src="/icons/house-solid.svg"
                alt=""
                width="20"
                height="20"
              />
            </Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
