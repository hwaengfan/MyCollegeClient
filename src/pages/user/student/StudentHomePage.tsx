import React from 'react';
import CourseCard from '../../../components/user/CourseCard';
import UserHeader from '../../../components/user/UserHeader';
import importImage from '../../../utils/importImage';
import availableCourses from '../../../__mock-data__/availableCourses';

const StudentHomePage: React.FC = () => {
  return (
    <>
      <div className="mt-5">
        <UserHeader />
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
