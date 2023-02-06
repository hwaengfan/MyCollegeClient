import React from 'react';
import { Helmet } from 'react-helmet-async';
import CourseCard from '../../../components/user/CourseCard';
import { useAppSelector } from '../../../types/ReduxTypes';
import formatName from '../../../utils/formatName';
import importImage from '../../../utils/importImage';
import availableCourses from '../../../__mock-data__/availableCourses';
import ProfessorHeader from './ProfessorHeader';

const ProfessorHomePage: React.FC = () => {
  const professorFirstName = useAppSelector(state => state.user.firstName);
  const professorLastName = useAppSelector(state => state.user.lastName);

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
        <div className="py-4 d-flex flex-column justify-content-center align-items-center align-content-center">
          <h3>Dashboard</h3>
          <div className="container">
            <div className="row justify-content-center">
              {availableCourses.map((course, index) => (
                <CourseCard
                  key={index}
                  courseName={course.name}
                  image={importImage(course.name)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessorHomePage;
