import React from 'react';
import { Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ClassesRoutes from '../../routes/sub_routes/ClassesRoutes';
import CustomBreadCrumb from '../../components/Layout/CustomBreadCrumb';

const Classes = ({ match: { url, isExact } }) => {
  let breadcrumbRoutes = [
    { link: '/dashboard', text: 'Home' },
    { link: '/classes', text: 'Classes' },
    {
      link: url + '/add-new-class',
      text: 'Add NewClass',
    },
  ];

  if (true) {
    breadcrumbRoutes.concat();
  }

  return (
    <div>
      <CustomBreadCrumb routes={breadcrumbRoutes} />
      <hr />
      <Row className='m-3'>
        <Button as={Link} className='mr-2' variant='primary' to={url}>
          View All Classes
        </Button>
        <Button
          as={Link}
          className='mr-2'
          variant='success'
          to={url + '/add-new-class'}>
          Add New Class
        </Button>
        <Button variant='success'>Class Details</Button>
      </Row>
      <hr />
      <ClassesRoutes url={url} />
    </div>
  );
};

export default Classes;
