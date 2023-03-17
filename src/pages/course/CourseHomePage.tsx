import React from 'react';
import AssignmentCard from '../../components/course/AssignmentCard';
import UserHeader from '../../components/user/UserHeader';

const data = {
  name: 'Test',
  description:
    "Some quick example text to build on the card title and make up the bulk of the card's content",
  grade: 'A',
};

const CourseHomePage: React.FC = () => {
  return (
    <>
      <UserHeader />
      <div className="row d-flex justify-content-center align-items-center py-5 mt-4">
        <AssignmentCard
          assignmentName={data.name}
          assignmentDescription={data.description}
          assignmentGrade={data.grade}
        />
      </div>
    </>
  );
};

export default CourseHomePage;
