import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProfileForm from '../../../components/user/ProfileForm';
import { useAppSelector } from '../../../types/ReduxTypes';
import formatName from '../../../utils/formatName';
import StudentHeader from './StudentHeader';

const StudentProfilePage: React.FC = () => {
  const studentFirstName = useAppSelector(state => state.user.firstName);
  const studentLastName = useAppSelector(state => state.user.lastName);
  const studentEmail = useAppSelector(state => state.user.email);
  const studentUsername = useAppSelector(state => state.user.username);
  const studentMajor = useAppSelector(state => state.user.major);

  return (
    <>
      <Helmet>
        <title>{formatName(studentFirstName, studentLastName)}</title>
      </Helmet>
      <div className="mt-5">
        <StudentHeader
          studentFirstName={studentFirstName}
          studentLastName={studentLastName}
        />
        <div className="d-flex flex-column justify-content-center align-items-center align-content-center py-4">
          <h3>Profile Setting</h3>
          <ProfileForm
            customFieldLabel="Major"
            customFieldName="major"
            userFirstName={studentFirstName}
            userLastName={studentLastName}
            userEmail={studentEmail}
            userUsername={studentUsername}
            customFieldValue={studentMajor}
          />
        </div>
      </div>
    </>
  );
};

export default StudentProfilePage;
