import React from 'react';
import ProfileForm from '../../../components/user/ProfileForm';
import UserHeader from '../../../components/user/UserHeader';
import { useAppSelector } from '../../../types/ReduxTypes';

const StudentProfilePage: React.FC = () => {
  const userInfo = useAppSelector(state => ({
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    email: state.user.email,
    username: state.user.username,
    major: state.user.major,
  }));

  return (
    <>
      <div className="mt-5">
        <UserHeader />
        <div className="d-flex flex-column justify-content-center align-items-center align-content-center py-4">
          <h3>Profile Setting</h3>
          <ProfileForm
            customFieldLabel="Major"
            customFieldName="major"
            userFirstName={userInfo.firstName}
            userLastName={userInfo.lastName}
            userEmail={userInfo.email}
            userUsername={userInfo.username}
            customFieldValue={userInfo.major}
          />
        </div>
      </div>
    </>
  );
};

export default StudentProfilePage;
