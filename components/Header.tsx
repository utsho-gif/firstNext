import Link from 'next/link';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { signIn, signOut } from 'next-auth/react';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/dashboard-swr">Dashboard</Nav.Link>
            <button
              className="btn btn-outline-warning"
              onClick={() => signIn()}
            >
              Sign In
            </button>
            <button
              className="ms-2 btn btn-outline-warning"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
