import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CustomBreadCrumb = ({ routes }) => {
  return (
    <Breadcrumb>
      {routes.map((route, index) => (
        <LinkContainer key={index} to={route.link}>
          <Breadcrumb.Item href='#' active={index === routes.length - 1}>
            {route.text}
          </Breadcrumb.Item>
        </LinkContainer>
      ))}
    </Breadcrumb>
  );
};

export default CustomBreadCrumb;
