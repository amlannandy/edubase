import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { auth } from './firebase/firebase';
import { AUTHENTICATE } from './store/actions/auth';

import store from './store/store';
import Routes from './routes/Routes';
import Home from './views/Home/Home';
import CustomAlert from './components/Layout/CustomAlert';
import CustomNavbar from './components/Layout/CustomNavbar';

const App = () => {
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      let payload;
      if (user != null) {
        payload = {
          isAuthenticated: true,
          email: user.email,
          name: user.displayName,
          userId: user.uid,
          isLoading: false,
        };
      } else {
        payload = {
          isLoading: false,
        };
      }
      store.dispatch({ type: AUTHENTICATE, payload: payload });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <CustomNavbar></CustomNavbar>
          <CustomAlert></CustomAlert>
          <Switch>
            <Route exact path='/' component={Home} />
            <Routes />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
