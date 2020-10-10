import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomInput = ({ text, icon, value, onChange, type }) => {
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
        onChange={event => onChange(event.target.value)}
        placeholder={text}
        type={type}
      />
    </InputGroup>
  );
};

export default CustomInput;
