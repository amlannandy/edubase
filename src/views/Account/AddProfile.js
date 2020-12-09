import React, { useReducer } from 'react';
import ImageUploader from 'react-images-upload';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Button } from 'react-bootstrap';
import {
  faUser,
  faSortNumericDown,
  faPhone,
  faGraduationCap,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';

import formReducer from '../../utils/form_reducer';
import { setAlert } from '../../store/actions/alert';
import { addProfile } from '../../store/actions/profile';
import CustomInput from '../../components/Layout/CustomInput';
import CustomSelect from '../../components/Layout/CustomSelect';
import LoadingSpinner from '../../components/Layout/LoadingSpinner';

const AddProfile = ({ history }) => {
  const dispatch = useDispatch();

  const { userId } = useSelector(state => state.auth);

  const branches = ['CSE', 'IT', 'ETC', 'MECH', 'EEE'];
  const positions = ['Jr. Professor', 'Professor', 'Head of Department'];

  const initialFormData = {
    name: '',
    age: '',
    phone: '',
    branch: branches[0],
    position: positions[0],
    image: null,
  };

  const [formData, setFormData] = useReducer(formReducer, initialFormData);
  const isLoading = useSelector(state => state.profile.isLoading);

  const addProfileHandler = () => {
    const { name, age, phone, branch, position, image } = formData;
    if (
      (name === '' || age === '',
      phone === '' || branch === '' || position === '')
    ) {
      dispatch(setAlert('Please fill all fields', 'danger'));
      return;
    }
    if (!image) {
      dispatch(setAlert('Please upload an image', 'warning'));
      return;
    }
    dispatch(addProfile(userId, formData, history));
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Col className='col-md-8 text-start my-5'>
      <h3>Add Profile</h3>
      <hr />
      <ImageUploader
        withIcon={true}
        buttonText='Choose Display Picture'
        onChange={picture => setFormData({ type: 'image', payload: picture })}
        imgExtension={['.jpg', '.png']}
        maxFileSize={5242880}
      />
      <CustomInput
        text='Enter your Name'
        icon={faUser}
        value={formData.name}
        onChange={text => setFormData({ type: 'name', payload: text })}
      />
      <CustomInput
        text='Enter your Age'
        icon={faSortNumericDown}
        type='number'
        value={formData.age}
        onChange={text => setFormData({ type: 'age', payload: text })}
      />
      <CustomInput
        text='Enter your Phone Number'
        icon={faPhone}
        value={formData.phone}
        onChange={text => setFormData({ type: 'phone', payload: text })}
      />
      <CustomSelect
        options={positions}
        icon={faGraduationCap}
        onChange={text => setFormData({ type: 'position', payload: text })}
      />
      <CustomSelect
        options={branches}
        icon={faCodeBranch}
        onChange={text => setFormData({ type: 'branch', payload: text })}
      />
      <Button size='lg' variant='success' onClick={addProfileHandler}>
        SUBMIT
      </Button>
    </Col>
  );
};

export default AddProfile;
