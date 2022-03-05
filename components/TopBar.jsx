import Image from 'next/image';
import React from 'react';
import { Container, Navbar, Stack } from 'react-bootstrap';

export default function TopBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Stack direction="horizontal" className="mx-auto" gap={3}>
        <Navbar.Brand>
          <Image src="/earth.svg" alt="" width="10px" height="10px" />
          <span className="ml-2">
            <strong>Posting Home</strong>
          </span>
        </Navbar.Brand>
        <Navbar.Brand>
          <Image src="/earth.svg" alt="" width="10px" height="10px" />
          <span className="ml-2">
            <strong>Posting Home</strong>
          </span>
        </Navbar.Brand>
      </Stack>
    </Navbar>
  );
}
