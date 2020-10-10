import React from 'react';
import { Spinner, Col, Row } from 'react-bootstrap';

const LoadingSpinner = ({ message = 'Loading...', color = 'dark' }) => {
  return (
    <Row className='justify-content-md-center'>
      <Col className='col-md-6 text-center mt-5'>
        <Spinner animation='border' size='lg' variant={color} />
        <p className='lead'>{message}</p>
      </Col>
    </Row>
  );
};

export default LoadingSpinner;
