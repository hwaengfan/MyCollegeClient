import React from 'react';
import UserHeader from '../../../components/user/UserHeader';
import { ProfessorHeaderProps } from '../../../types/PropTypes';

const boardMemberSections = [
  {
    title: 'profile',
    label: 'Profile',
    path: '/profile',
  },
];

const BoardMemberHeader: React.FC<ProfessorHeaderProps> = props => {
  return (
    <UserHeader
      userFirstName={props.professorFirstName}
      userLastName={props.professorLastName}
      sections={boardMemberSections}
    />
  );
};

export default BoardMemberHeader;
