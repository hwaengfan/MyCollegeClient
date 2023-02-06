import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProfileForm from '../../../components/user/ProfileForm';
import { useAppSelector } from '../../../types/ReduxTypes';
import formatName from '../../../utils/formatName';
import BoardMemberHeader from './BoardMemberHeader';

const BoardProfilePage: React.FC = () => {
  const boardMemberFirstName = useAppSelector(state => state.user.firstName);
  const boardMemberLastName = useAppSelector(state => state.user.lastName);
  const boardMemberEmail = useAppSelector(state => state.user.email);
  const boardMemberUsername = useAppSelector(state => state.user.username);

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
