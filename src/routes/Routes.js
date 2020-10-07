import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Login from '../views/Auth/Login';
import Register from '../views/Auth/Register';

import Dashboard from '../views/Dashboard/Dashboard';
import Classes from '../views/Classes/Classes';
import Account from '../views/Account/Account';

const Routes = () => {
  return (
    <Container className='my-3'>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/classes' component={Classes} />
        <Route exact path='/account' component={Account} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </Container>
  );
};

export default Routes;
