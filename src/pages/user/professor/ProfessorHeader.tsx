import React from 'react';
import UserHeader from '../../../components/user/UserHeader';
import { ProfessorHeaderProps } from '../../../types/PropTypes';

const professorSections = [
  {
    title: 'profile',
    label: 'Profile',
    path: '/profile',
  },
];

const ProfessorHeader: React.FC<ProfessorHeaderProps> = props => {
  return (
    <UserHeader
      userFirstName={props.professorFirstName}
      userLastName={props.professorLastName}
      sections={professorSections}
    />
  );
};

export default ProfessorHeader;
