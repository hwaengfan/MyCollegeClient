import React from 'react';

const CourseHomePage = React.lazy(
  () => import('../../../pages/course/CourseHomePage'),
);

const CourseRouteConfig = [
  {
    title: 'home',
    path: '/',
    component: CourseHomePage,
  },
];

export default CourseRouteConfig;
