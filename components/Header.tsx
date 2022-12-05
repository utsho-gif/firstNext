import Link from 'next/link';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSession, signIn, signOut } from 'next-auth/react';

const Header = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">NextAwesome</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/dashboard-swr">Dashboard</Nav.Link>
            {status === 'authenticated' && (
              <button
                className="ms-2 btn btn-outline-warning"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            )}
            {status === 'unauthenticated' && (
              <button
                className="btn btn-outline-warning"
                onClick={() => signIn()}
              >
                Sign In
              </button>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
