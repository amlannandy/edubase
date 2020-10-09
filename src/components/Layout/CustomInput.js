import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomInput = ({ text, icon, value, onChange }) => {
  return (
    <InputGroup size='md' className='my-3'>
      <InputGroup.Prepend>
        <InputGroup.Text>
          <FontAwesomeIcon icon={icon} />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        aria-label='Large'
        aria-describedby='inputGroup-sizing-sm'
        value={value}
        onChange={onChange}
        placeholder={text}
      />
    </InputGroup>
  );
};

export default CustomInput;
