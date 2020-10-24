import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Jumbotron } from 'react-bootstrap';

import { logout, deleteAccount } from '../../store/actions/auth';
import CustomBreadCrumb from '../../components/Layout/CustomBreadCrumb';

const Account = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const breadcrumbRoutes = [
    { link: '/dashboard', text: 'Home' },
    { link: '/account', text: 'Account' },
  ];

  const logoutUser = () => {
    dispatch(logout());
  };

  const deleteUser = () => {
    dispatch(deleteAccount());
  };

  if (!isAuthenticated) {
    return <Redirect to='/login' />;
  }

  return (
    <div>
      <CustomBreadCrumb routes={breadcrumbRoutes} />
      <Jumbotron className='py-4 px-4'>
        <Button className='mr-2' variant='warning' onClick={logoutUser}>
          Logout
        </Button>
        <Button variant='danger' onClick={deleteUser}>
          Delete Account
        </Button>
      </Jumbotron>
    </div>
  );
};

export default Account;
