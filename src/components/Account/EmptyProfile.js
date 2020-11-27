import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

import Empty from '../../assets/empty.png';

const EmptyProfile = () => {
  return (
    <Row className='mx-3 my-5 pr-5 py-3'>
      <Col>
        <h1>No Profile Found</h1>
        <p className='lead'>Add your details now!</p>
        <Button as={Link} to='account/add-profile' variant='success'>
          Add Profile
        </Button>
      </Col>
      <img
        src={Empty}
        alt='This Page is not available'
        style={{ height: '200px' }}
      />
    </Row>
  );
};

export default EmptyProfile;
