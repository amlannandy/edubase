import React, { useReducer } from 'react';
import { Redirect } from 'react-router-dom';
import { Col, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { login } from '../../store/actions/auth';
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
  email: '',
  password: '',
};

const Login = props => {
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading } = useSelector(state => state.auth);
  const [formData, setFormData] = useReducer(formReducer, initialFormData);

  const loginUser = () => {
    const { email, password } = formData;
    if (email === '' || password === '') {
      dispatch(setAlert('Please fill all fields', 'danger'));
      return;
    }
    dispatch(login(email, password));
  };

  const registerInstead = () => {
    props.history.push('/register');
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
        <h1 className='display-4 mt-5 mb-5'>Login</h1>
        <CustomInput
          text='Enter your Email Address'
          icon={faEnvelope}
          value={formData.email}
          onChange={text => setFormData({ type: 'email', payload: text })}
          type='email'
        />
        <CustomInput
          text='Enter your Password'
          icon={faLock}
          value={formData.password}
          onChange={text => setFormData({ type: 'password', payload: text })}
          type='password'
        />
        <Button block variant='dark' onClick={loginUser} className='mb-2'>
          LOGIN
        </Button>
        <Button block variant='dark' onClick={registerInstead}>
          REGISTER INSTEAD
        </Button>
      </Col>
    </Row>
  );
};

export default Login;
