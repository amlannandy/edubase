import React from 'react';

import ClassesRoutes from '../../routes/sub_routes/ClassesRoutes';
import CustomBreadCrumb from '../../components/Layout/CustomBreadCrumb';

const Classes = ({ location: { pathname }, match: { url, isExact } }) => {
  let breadcrumbRoutes = [
    { link: '/dashboard', text: 'Home' },
    { link: '/classes', text: 'Classes' },
  ];

  if (!isExact) {
    let link = url;
    let text = '';
    if (pathname === '/classes/add-new-class') {
      link += '/add-new-class';
      text = 'Add New Class';
    }
    breadcrumbRoutes.push({ link, text });
  }

  return (
    <div>
      <CustomBreadCrumb routes={breadcrumbRoutes} />
      <hr />
      <ClassesRoutes url={url} />
    </div>
  );
};

export default Classes;
