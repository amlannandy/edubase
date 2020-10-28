import React from 'react';
import { Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ClassesRoutes from '../../routes/sub_routes/ClassesRoutes';
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
        <Button
          as={Link}
          className='mr-2'
          variant='success'
          to='/classes/add-new-class'>
          Add New Class
        </Button>
        <Button variant='success'>Class Details</Button>
      </Row>
      <hr />
      <ClassesRoutes />
    </div>
  );
};

export default Classes;
