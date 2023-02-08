import React from 'react';

const BoardMemberHomePage = React.lazy(
  () => import('../../../pages/user/board-member/BoardMemberHomePage'),
);

const BoardProfilePage = React.lazy(
  () => import('../../../pages/user/board-member/BoardMemberProfilePage'),
);

const BoardMemberRouteConfig = [
  {
    title: 'home',
    path: '/',
    component: BoardMemberHomePage,
  },
  {
    title: 'profile',
    path: '/profile',
    component: BoardProfilePage,
  },
];

export default BoardMemberRouteConfig;
