import React from 'react';
import { Switch } from 'react-router-dom';

import AddNewClass from '../../views/Classes/AddNewClass';
import ClassDetails from '../../views/Classes/ClassDetails';

import PrivateRoute from '../custom_routes/PrivateRoute';

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute
        exact
        path='classes/add-new-class'
        component={AddNewClass}
      />
      <PrivateRoute
        exact
        path='classes/class-details/:id'
        component={ClassDetails}
      />
    </Switch>
  );
};

export default Routes;
