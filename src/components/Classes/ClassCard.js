import React from 'react';
import { Card, Button, Col, Badge } from 'react-bootstrap';

const ClassCard = ({ selectedClass }) => {
  return (
    <Col md={4}>
      <Card className='mr-1 mb-3' style={{ width: '22.5rem' }}>
        <Card.Body>
          <Card.Title>{`${selectedClass.className} (${selectedClass.batch})`}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            {'Teacher - ' + selectedClass.teacherName}
          </Card.Subtitle>
          <Badge variant='info'>{selectedClass.semester}</Badge>
          <Card.Text>
            <small>{selectedClass.subjectName}</small>
          </Card.Text>
          <Button variant='danger' block>
            View Details
          </Button>
          <Button variant='outline-danger' block>
            Mark Attendance
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ClassCard;
