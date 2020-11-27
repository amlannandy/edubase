import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import Home from '../views/Home/Home';
import Login from '../views/Auth/Login';
import Register from '../views/Auth/Register';

import Classes from '../views/Classes/Classes';
import Account from '../views/Account/Account';
import Dashboard from '../views/Dashboard/Dashboard';

import PageNotFound from '../components/PageNotFound';

import GuestRoute from './custom_routes/GuestRoute';
import PrivateRoute from './custom_routes/PrivateRoute';

const Routes = () => {
  return (
    <Container className='my-3'>
      <Switch>
        <Route exact path='/' component={Home} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <PrivateRoute path='/classes' component={Classes} />
        <PrivateRoute path='/account' component={Account} />
        <GuestRoute exact path='/login' component={Login} />
        <GuestRoute exact path='/register' component={Register} />
        <Route component={PageNotFound} />
      </Switch>
    </Container>
  );
};

export default Routes;
