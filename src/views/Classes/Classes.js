import React from 'react';

import ClassesRoutes from '../../routes/sub_routes/ClassesRoutes';
import CustomBreadCrumb from '../../components/Layout/CustomBreadCrumb';

const Classes = ({ match: { url, isExact } }) => {
  let breadcrumbRoutes = [
    { link: '/dashboard', text: 'Home' },
    { link: '/classes', text: 'Classes' },
    {
      link: url + '/add-new-class',
      text: 'Add New Class',
    },
  ];

  return (
    <div>
      <CustomBreadCrumb routes={breadcrumbRoutes} />
      <hr />
      <ClassesRoutes url={url} />
    </div>
  );
};

export default Classes;
