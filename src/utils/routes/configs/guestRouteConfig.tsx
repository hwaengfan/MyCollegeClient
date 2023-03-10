import React from 'react';

const LoginPage = React.lazy(
  () => import('../../../pages/home/login/LoginPage'),
);

const SignupPage = React.lazy(
  () => import('../../../pages/home/signup/SignupPage'),
);

const GuestRouteConfig = [
  {
    title: 'home',
    path: '/',
    component: LoginPage,
  },
  {
    title: 'signup',
    path: '/signup',
    component: SignupPage,
  },
];

export default GuestRouteConfig;
