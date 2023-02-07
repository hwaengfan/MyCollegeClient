import React from 'react';
import UserHeader from '../../../components/user/UserHeader';
import { ProfessorHeaderProps } from '../../../types/PropTypes';

const ProfessorHeader: React.FC<ProfessorHeaderProps> = props => {
  return (
    <UserHeader
      userFirstName={props.professorFirstName}
      userLastName={props.professorLastName}
    />
  );
};

export default ProfessorHeader;
