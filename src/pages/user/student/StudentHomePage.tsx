import React from 'react';
import { Helmet } from 'react-helmet-async';
import CourseCard from '../../../components/user/CourseCard';
import formatName from '../../../utils/formatName';
import importImage from '../../../utils/importImage';
import availableCourses from '../../../__mock-data__/availableCourses';
import StudentHeader from './StudentHeader';

const StudentHomePage: React.FC = () => {
  let studentFirstName = 'Hoang';
  let studentLastName = 'Phan';

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

export default StudentHomePage;
