import React from 'react';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, Nav, NavbarBrand, NavLink } from 'react-bootstrap';

const CustomNavbar = props => {
  const { isAuthenticated, name } = useSelector(state => state.auth);

  const guestLinks = (
    <Nav className='ml-auto'>
      <LinkContainer to='/login'>
        <NavLink>Login</NavLink>
      </LinkContainer>
      <LinkContainer to='/register'>
        <NavLink>Register</NavLink>
      </LinkContainer>
    </Nav>
  );

  const authenticatedLinks = (
    <Nav className='ml-auto'>
      <LinkContainer to='/' exact>
        <NavLink>Dashboard</NavLink>
      </LinkContainer>
      <LinkContainer to='/classes'>
        <NavLink>Classes</NavLink>
      </LinkContainer>
      <LinkContainer to='/account'>
        <NavLink>
          Hello <strong>{name}</strong>
        </NavLink>
      </LinkContainer>
    </Nav>
  );

  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <LinkContainer to='/' exact>
          <NavbarBrand>Edubase</NavbarBrand>
        </LinkContainer>
        {isAuthenticated ? authenticatedLinks : guestLinks}
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
