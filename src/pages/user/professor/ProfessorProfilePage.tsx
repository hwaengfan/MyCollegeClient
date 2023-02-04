import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProfileForm from '../../../components/user/ProfileForm';
import formatName from '../../../utils/formatName';
import ProfessorHeader from './ProfessorHeader';

const ProfessorProfilePage: React.FC = () => {
  let professorFirstName = 'Anorld';
  let professorLastName = 'Guerra III';
  let professorEmail = 'example@gmail.com';
  let professorUsername = 'test123';
  let professorDepartment = 'Physics';

  return (
    <>
      <Helmet>
        <title>{formatName(professorFirstName, professorLastName)}</title>
      </Helmet>
      <div className="mt-5">
        <ProfessorHeader
          professorFirstName={professorFirstName}
          professorLastName={professorLastName}
        />
        <div className="d-flex flex-column justify-content-center align-items-center align-content-center py-4">
          <h3>Profile Setting</h3>
          <ProfileForm
            customFieldLabel="Department"
            userFirstName={professorFirstName}
            userLastName={professorLastName}
            userEmail={professorEmail}
            userUsername={professorUsername}
            customFieldValue={professorDepartment}
          />
        </div>
      </div>
    </>
  );
};

export default ProfessorProfilePage;
