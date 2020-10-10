import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, Nav, NavbarBrand, NavLink } from 'react-bootstrap';

import { logout } from '../../store/actions/auth';

const CustomNavbar = props => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const logoutUser = () => {
    console.log(props);
    dispatch(logout());
  };

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
        <NavLink>Account</NavLink>
      </LinkContainer>
      <LinkContainer onClick={logoutUser} to='/login'>
        <NavLink>Logout</NavLink>
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
