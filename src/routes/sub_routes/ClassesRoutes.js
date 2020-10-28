import React from 'react';
import { Switch } from 'react-router-dom';

import ClassesList from '../../views/Classes/ClassesList';
import AddNewClass from '../../views/Classes/AddNewClass';
import ClassDetails from '../../views/Classes/ClassDetails';

import PrivateRoute from '../custom_routes/PrivateRoute';

const Routes = ({ url }) => {
  return (
    <Switch>
      <PrivateRoute exact path={url + '/'} component={ClassesList} />
      <PrivateRoute
        exact
        path={url + '/add-new-class'}
        component={AddNewClass}
      />
      <PrivateRoute exact path='/class-details/:id' component={ClassDetails} />
    </Switch>
  );
};

export default Routes;
