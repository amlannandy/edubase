import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, Nav, NavbarBrand, NavLink } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <LinkContainer to='/' exact>
          <NavbarBrand>Edubase</NavbarBrand>
        </LinkContainer>
        <Nav className='ml-auto'>
          <LinkContainer to='/' exact>
            <NavLink>Dashboard</NavLink>
          </LinkContainer>
          <LinkContainer to='/classes'>
            <NavLink>Classes</NavLink>
          </LinkContainer>
          <LinkContainer to='/account'>
            <NavLink>Account</NavLink>
          </LinkContainer>
          <LinkContainer to='/logout'>
            <NavLink>Logout</NavLink>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
