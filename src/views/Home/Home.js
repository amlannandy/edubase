import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row, Button } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
  const { isAuthenticated, isLoading } = useSelector(state => state.auth);

  if (isAuthenticated && !isLoading) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='landing'>
      <div className='dark-overlay'>
        <Col>
          <Row className='justify-content-md-center mt-5'>
            <h1 className='display-4 mt-5 text-white'>Edubase</h1>
          </Row>
          <Row className='justify-content-md-center mt-1'>
            <p className='lead text-light'>Manage your online classes</p>
          </Row>
          <Row className='justify-content-md-center mt-5'>
            <Button as={Link} to='/login' className='mr-3' variant='light'>
              Login
            </Button>
            <Button as={Link} to='/register' variant='dark'>
              Register
            </Button>
          </Row>
        </Col>
      </div>
    </div>
  );
};

export default Home;
