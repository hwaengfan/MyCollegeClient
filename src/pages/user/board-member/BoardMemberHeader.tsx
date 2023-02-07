import React from 'react';
import UserHeader from '../../../components/user/UserHeader';
import { ProfessorHeaderProps } from '../../../types/PropTypes';

const BoardMemberHeader: React.FC<ProfessorHeaderProps> = props => {
  return (
    <UserHeader
      userFirstName={props.professorFirstName}
      userLastName={props.professorLastName}
    />
  );
};

export default BoardMemberHeader;
