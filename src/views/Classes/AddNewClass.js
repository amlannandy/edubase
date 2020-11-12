import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Button } from 'react-bootstrap';
import {
  faHome,
  faBook,
  faUser,
  faCalendarTimes,
  faSortNumericDown,
} from '@fortawesome/free-solid-svg-icons';

import formReducer from '../../utils/form_reducer';
import { setAlert } from '../../store/actions/alert';
import { addClass } from '../../store/actions/classes';
import CustomInput from '../../components/Layout/CustomInput';
import CustomSelect from '../../components/Layout/CustomSelect';
import LoadingSpinner from '../../components/Layout/LoadingSpinner';

const AddNewClass = ({ history }) => {
  const dispatch = useDispatch();

  const batches = ['2017 - 2021', '2018 -2022', '2019 - 2023', '2020 - 2024'];
  const semesters = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];
  const initialFormData = {
    className: '',
    teacher: '',
    subject: '',
    semester: semesters[0],
    batch: batches[0],
  };

  const [formData, setFormData] = useReducer(formReducer, initialFormData);
  const isLoading = useSelector(state => state.classes.isLoading);

  const addNewClass = () => {
    const { className, teacher, subject, semester, batch } = formData;
    if (
      className === '' ||
      teacher === '' ||
      subject === '' ||
      batch === '' ||
      semester === ''
    ) {
      dispatch(setAlert('Please fill all fields', 'danger'));
      return;
    }
    dispatch(addClass(className, teacher, subject, semester, batch, history));
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Col className='col-md-6 text-start'>
      <h3>Add New Class</h3>
      <CustomInput
        text='Enter Class Name'
        icon={faHome}
        value={formData.className}
        onChange={text => setFormData({ type: 'className', payload: text })}
      />
      <CustomInput
        text='Enter Subject Name'
        icon={faBook}
        value={formData.subject}
        onChange={text => setFormData({ type: 'subject', payload: text })}
      />
      <CustomInput
        text='Enter Teacher Name'
        icon={faUser}
        value={formData.teacher}
        onChange={text => setFormData({ type: 'teacher', payload: text })}
      />
      <CustomSelect
        options={semesters.map(sem => sem + ' Semester')}
        icon={faCalendarTimes}
        onChange={text => setFormData({ type: 'semester', payload: text })}
      />
      <CustomSelect
        options={batches}
        icon={faSortNumericDown}
        onChange={text => setFormData({ type: 'batch', payload: text })}
      />
      <Button variant='success' onClick={addNewClass}>
        Add Class
      </Button>
    </Col>
  );
};

export default AddNewClass;
