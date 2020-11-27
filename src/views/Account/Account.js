import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Jumbotron } from 'react-bootstrap';

import { logout, deleteAccount } from '../../store/actions/auth';
import ProfileRoutes from '../../routes/sub_routes/ProfileRoutes';
import CustomBreadCrumb from '../../components/Layout/CustomBreadCrumb';

const Account = ({ location: { pathname }, match: { url, isExact } }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const breadcrumbRoutes = [
    { link: '/dashboard', text: 'Home' },
    { link: '/account', text: 'Account' },
  ];

  if (!isExact) {
    let link = url;
    let text = '';
    if (pathname === '/account/add-profile') {
      link += '/add-profile';
      text = 'Add Profile';
    }
    console.log('Fucl');
    breadcrumbRoutes.push({ link, text });
  }

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
      <ProfileRoutes url={url} />
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
