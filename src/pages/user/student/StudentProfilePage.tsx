import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProfileForm from '../../../components/user/ProfileForm';
import formatName from '../../../utils/formatName';
import StudentHeader from './StudentHeader';

const StudentProfilePage: React.FC = () => {
  let studentFirstName = 'Hoang';
  let studentLastName = 'Phan';
  let studentEmail = 'example@gmail.com';
  let studentUsername = 'test123';
  let studentMajor = 'Math';

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
