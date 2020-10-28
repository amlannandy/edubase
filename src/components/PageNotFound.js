import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import PageNotFoundImage from '../assets/404.png';

const PageNotFound = () => {
  return (
    <div>
      <h1 className='display-4 mt-5'>Page Not Found</h1>
      <img
        src={PageNotFoundImage}
        alt='This Page is not available'
        style={{ height: '300px' }}
      />
      <br />
      <Button className='ml-3' as={Link} to='/' variant='warning'>
        Go to Home
      </Button>
    </div>
  );
};

export default PageNotFound;
