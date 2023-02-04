import React from 'react';

const StudentHomePage = React.lazy(
  () => import('../../../pages/user/student/StudentHomePage'),
);

const StudentProfilePage = React.lazy(
  () => import('../../../pages/user/student/StudentProfilePage'),
);

const studentRouteConfig = [
  {
    title: 'home',
    path: '/',
    component: StudentHomePage,
  },
  {
    title: 'profile',
    path: '/profile',
    component: StudentProfilePage,
  },
];

export default studentRouteConfig;
