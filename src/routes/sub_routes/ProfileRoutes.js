import React from 'react';
import { Switch } from 'react-router-dom';

import Profile from '../../views/Account/Profile';
import AddProfile from '../../views/Account/AddProfile';

import PrivateRoute from '../custom_routes/PrivateRoute';

const Routes = ({ url }) => {
  return (
    <Switch>
      <PrivateRoute exact path={url + '/'} component={Profile} />
      <PrivateRoute exact path={url + '/add-profile'} component={AddProfile} />
    </Switch>
  );
};

export default Routes;
