import React from 'react';
import { Card } from 'react-bootstrap';

const AssignmentCard: React.FC = () => {
  return (
    <>
      <Card
        className="col-13 col-md-6 col-lg-3 border-dark mx-3 my-3"
        style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default AssignmentCard;
