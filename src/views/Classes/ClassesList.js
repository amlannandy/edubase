import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

const ClassesList = ({ match: { url } }) => {
  return (
    <Fragment>
      <Row className='m-3 align-items-center'>
        <Col md={10}>
          <h3>Your Classes</h3>
        </Col>
        <Col md={2}>
          <Button
            as={Link}
            className='mr-2'
            variant='success'
            to={url + '/add-new-class'}>
            Add New Class
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ClassesList;
