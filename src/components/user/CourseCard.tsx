import React from 'react';
import { Card } from 'react-bootstrap';
import { CourseCardProps } from '../../types/PropTypes';

const CourseCard: React.FC<CourseCardProps> = props => {
  return (
    <Card
      className="col-13 col-md-6 col-lg-3 mx-3 my-3 border-dark"
      style={{ width: '15rem' }}>
      <Card.Img variant="top" src={props.image} style={{ height: '100%' }} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-center">
          {props.courseName}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
