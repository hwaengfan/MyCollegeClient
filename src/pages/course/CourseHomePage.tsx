import React from 'react';
import AssignmentCard from '../../components/course/AssignmentCard';
import UserHeader from '../../components/user/UserHeader';

const CourseHomePage: React.FC = () => {
  return (
    <>
      <UserHeader />
      <div className="row d-flex justify-content-center align-items-center py-5 mt-4">
        <AssignmentCard />
      </div>
    </>
  );
};

export default CourseHomePage;
