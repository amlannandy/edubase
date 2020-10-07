import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

import CustomNavbar from './components/CustomNavbar';
import Routes from './routes/Routes';

const App = () => {
  return (
    <Router>
      <Fragment>
        <CustomNavbar></CustomNavbar>
        <Routes></Routes>
      </Fragment>
    </Router>
  );
};

export default App;
