import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';

import ClassCard from '../../components/Classes/ClassCard';
import { fetchClasses } from '../../store/actions/classes';
import LoadingSpinner from '../../components/Layout/LoadingSpinner';

const ClassesList = ({ match: { url } }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClasses());
  }, [dispatch]);

  const { classes, isLoading } = useSelector(state => state.classes);

  if (isLoading) {
    return (
      <LoadingSpinner color='success' message='Fetching your classes...' />
    );
  }

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
      <Row>
        {classes.map(c => (
          <ClassCard key={c.id} selectedClass={c} />
        ))}
      </Row>
    </Fragment>
  );
};

export default ClassesList;
