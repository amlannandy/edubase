import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import CustomInput from '../../components/Layout/CustomInput';

const Register = () => {
  return (
    <Row className='justify-content-md-center'>
      <Col className='col-md-6 text-center'>
        <h1 className='display-4 mt-5 mb-5'>Register</h1>
        <CustomInput text='Enter your Name' icon={faUser} />
        <CustomInput text='Enter your Email Address' icon={faEnvelope} />
        <CustomInput text='Enter your Password' icon={faLock} />
        <CustomInput text='Confirm your Password' icon={faLock} />
        <Button block variant='dark'>
          REGISTER
        </Button>
      </Col>
    </Row>
  );
};

export default Register;
