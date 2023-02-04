import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProfileForm from '../../../components/user/ProfileForm';
import formatName from '../../../utils/formatName';
import BoardMemberHeader from './BoardMemberHeader';

const BoardProfilePage: React.FC = () => {
  let boardMemberFirstName = 'Dean';
  let boardMemberLastName = 'Sensei';
  let boardMemberEmail = 'example@gmail.com';
  let boardMemberUsername = 'test123';

  return (
    <>
      <Helmet>
        <title>{formatName(boardMemberFirstName, boardMemberLastName)}</title>
      </Helmet>
      <div className="mt-5">
        <BoardMemberHeader
          professorFirstName={boardMemberFirstName}
          professorLastName={boardMemberLastName}
        />
        <div className="d-flex flex-column justify-content-center align-items-center align-content-center py-4">
          <h3>Profile Setting</h3>
          <ProfileForm
            userFirstName={boardMemberFirstName}
            userLastName={boardMemberLastName}
            userEmail={boardMemberEmail}
            userUsername={boardMemberUsername}
          />
        </div>
      </div>
    </>
  );
};

export default BoardProfilePage;
