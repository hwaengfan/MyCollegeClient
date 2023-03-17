import React from 'react';
import { Card } from 'react-bootstrap';
import { AssignmentCardProps } from '../../types/PropTypes';

const AssignmentCard: React.FC<AssignmentCardProps> = props => {
  return (
    <>
      <Card
        className="col-13 col-md-6 col-lg-3 border-dark mx-3 my-3"
        style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>{props.assignmentName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Score: {props.assignmentGrade}
          </Card.Subtitle>
          <Card.Text>{props.assignmentDescription}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default AssignmentCard;
