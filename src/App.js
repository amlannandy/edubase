import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store/store';
import Routes from './routes/Routes';
import CustomAlert from './components/Layout/CustomAlert';
import CustomNavbar from './components/Layout/CustomNavbar';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <CustomNavbar></CustomNavbar>
          <CustomAlert></CustomAlert>
          <Routes></Routes>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
