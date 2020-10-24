import React from 'react';
import { Row, Button } from 'react-bootstrap';

import CustomBreadCrumb from '../../components/Layout/CustomBreadCrumb';

const Classes = () => {
  const breadcrumbRoutes = [
    { link: '/dashboard', text: 'Home' },
    { link: '/classes', text: 'Classes' },
  ];

  return (
    <div>
      <CustomBreadCrumb routes={breadcrumbRoutes} />
      <hr />
      <Row className='m-3'>
        <Button className='mr-2' variant='primary'>
          View All Classes
        </Button>
        <Button variant='success'>Add New Class</Button>
      </Row>
      <hr />
    </div>
  );
};

export default Classes;
