import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Button } from 'react-bootstrap';
import { faHome, faBook, faUser } from '@fortawesome/free-solid-svg-icons';

import { setAlert } from '../../store/actions/alert';
import { addClass } from '../../store/actions/classes';
import CustomInput from '../../components/Layout/CustomInput';

import formReducer from '../../utils/form_reducer';

const AddNewClass = () => {
  const dispatch = useDispatch();

  const initialFormData = {
    className: '',
    teacher: '',
    subject: '',
  };

  const [formData, setFormData] = useReducer(formReducer, initialFormData);

  const addNewClass = () => {
    const { className, teacher, subject } = formData;
    if (className === '' || teacher === '' || subject === '') {
      dispatch(setAlert('Please fill all fields', 'danger'));
      return;
    }
    dispatch(addClass(className, teacher, subject));
  };

  return (
    <Col className='col-md-6 text-start'>
      <h3>Add New Class</h3>
      <CustomInput
        text='Enter Class Name'
        icon={faHome}
        value={formData.name}
        onChange={text => setFormData({ type: 'className', payload: text })}
      />
      <CustomInput
        text='Enter Teacher Name'
        icon={faUser}
        value={formData.name}
        onChange={text => setFormData({ type: 'teacher', payload: text })}
      />
      <CustomInput
        text='Enter Subject Name'
        icon={faBook}
        value={formData.name}
        onChange={text => setFormData({ type: 'subject', payload: text })}
      />
      <Button variant='success' onClick={addNewClass}>
        Add Class
      </Button>
    </Col>
  );
};

export default AddNewClass;
