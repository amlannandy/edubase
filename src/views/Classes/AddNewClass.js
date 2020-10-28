import React, { useReducer } from 'react';
import { Col, Row } from 'react-bootstrap';
import { faLock, faEnvelope, faBook } from '@fortawesome/free-solid-svg-icons';

import CustomInput from '../../components/Layout/CustomInput';

import formReducer from '../../utils/form_reducer';

const AddNewClass = () => {
  const initialFormData = {
    name: '',
    teacher: '',
  };

  const [formData, setFormData] = useReducer(initialFormData, formReducer);

  return (
    <Col className='col-md-6 text-start'>
      <h1 className='lead'>Add a New Class</h1>
      <CustomInput
        text='Enter Class Name'
        icon={faBook}
        value={formData.name}
        onChange={text => setFormData({ type: 'name', payload: text })}
      />
    </Col>
  );
};

export default AddNewClass;
