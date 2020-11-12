import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomSelect = ({ icon, options = [], onChange }) => {
  return (
    <InputGroup className='my-3'>
      <InputGroup.Prepend>
        <InputGroup.Text>
          <FontAwesomeIcon icon={icon} />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        as='select'
        placeholder='Enter Batch'
        onChange={event => onChange(event.target.value)}>
        {options.map(element => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </FormControl>
    </InputGroup>
  );
};

export default CustomSelect;
