import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProfileForm from '../../../components/user/ProfileForm';
import { useAppSelector } from '../../../types/ReduxTypes';
import formatName from '../../../utils/formatName';
import ProfessorHeader from './ProfessorHeader';

const ProfessorProfilePage: React.FC = () => {
  const professorFirstName = useAppSelector(state => state.user.firstName);
  const professorLastName = useAppSelector(state => state.user.lastName);
  const professorEmail = useAppSelector(state => state.user.email);
  const professorUsername = useAppSelector(state => state.user.username);
  const professorDepartment = useAppSelector(state => state.user.department);

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
            customFieldName="department"
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
