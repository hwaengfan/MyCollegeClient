import React from 'react';
import UserHeader from '../../../components/user/UserHeader';
import { StudentHeaderProps } from '../../../types/PropTypes';

const studentSections = [
  {
    title: 'profile',
    label: 'Profile',
    path: '/profile',
  },
];

const StudentHeader: React.FC<StudentHeaderProps> = props => {
  return (
    <UserHeader
      userFirstName={props.studentFirstName}
      userLastName={props.studentLastName}
      sections={studentSections}
    />
  );
};

export default StudentHeader;
