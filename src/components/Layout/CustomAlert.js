import React from 'react';
import { useSelector } from 'react-redux';
import { Alert, Container } from 'react-bootstrap';

const CustomAlert = () => {
  const alerts = useSelector((state) => state.alert);

  if (!alerts) {
    return null;
  }

  return alerts.map((alert) => (
    <Alert key={alert.id} variant={alert.type}>
      <Container>{alert.msg}</Container>
    </Alert>
  ));
};

export default CustomAlert;
