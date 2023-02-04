import React from 'react';

const ProfessorHomePage = React.lazy(
  () => import('../../../pages/user/professor/ProfessorHomePage'),
);

const ProfessorProfilePage = React.lazy(
  () => import('../../../pages/user/professor/ProfessorProfilePage'),
);

const professorRouteConfig = [
  {
    title: 'home',
    path: '/',
    component: ProfessorHomePage,
  },
  {
    title: 'profile',
    path: '/profile',
    component: ProfessorProfilePage,
  },
];

export default professorRouteConfig;
