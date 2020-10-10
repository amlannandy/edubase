import React, { useReducer } from 'react';
import { Redirect } from 'react-router-dom';
import { Col, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { register } from '../../store/actions/auth';
import { setAlert } from '../../store/actions/alert';
import CustomInput from '../../components/Layout/CustomInput';
import LoadingSpinner from '../../components/Layout/LoadingSpinner';

const formReducer = (state, action) => {
  const { type, payload } = action;
  return {
    ...state,
    [type]: payload,
  };
};

const initialFormData = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Register = props => {
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading } = useSelector(state => state.auth);
  const [formData, setFormData] = useReducer(formReducer, initialFormData);

  const registerUser = () => {
    const { name, email, password, confirmPassword } = formData;
    if (
      name === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      dispatch(setAlert('Please fill all fields', 'danger'));
      return;
    }
    if (password !== confirmPassword) {
      dispatch(setAlert('Passowrds do not match', 'danger'));
      return;
    }
    dispatch(register(name, email, password));
  };

  const loginInstead = () => {
    props.history.push('/login');
  };

  if (isLoading) {
    return <LoadingSpinner message='Authenticating...' color='success' />;
  }

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Row className='justify-content-md-center'>
      <Col className='col-md-6 text-center'>
        <h1 className='display-4 mt-5 mb-5'>Register</h1>
        <CustomInput
          text='Enter your Name'
          icon={faUser}
          value={formData.name}
          onChange={text => setFormData({ type: 'name', payload: text })}
        />
        <CustomInput
          text='Enter your Email Address'
          icon={faEnvelope}
          value={formData.email}
          onChange={text => setFormData({ type: 'email', payload: text })}
        />
        <CustomInput
          text='Enter your Password'
          icon={faLock}
          value={formData.password}
          onChange={text => setFormData({ type: 'password', payload: text })}
          type='password'
        />
        <CustomInput
          text='Confirm your Password'
          icon={faLock}
          value={formData.confirmPassword}
          onChange={text =>
            setFormData({ type: 'confirmPassword', payload: text })
          }
          type='password'
        />
        <Button block variant='dark' onClick={registerUser} className='mb-2'>
          REGISTER
        </Button>
        <Button block variant='dark' onClick={loginInstead}>
          LOGIN INSTEAD
        </Button>
      </Col>
    </Row>
  );
};

export default Register;
