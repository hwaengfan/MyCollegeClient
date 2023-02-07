import React from 'react';
import UserHeader from '../../../components/user/UserHeader';
import { StudentHeaderProps } from '../../../types/PropTypes';

const StudentHeader: React.FC<StudentHeaderProps> = props => {
  return (
    <UserHeader
      userFirstName={props.studentFirstName}
      userLastName={props.studentLastName}
    />
  );
};

export default StudentHeader;
