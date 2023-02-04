import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import formatName from '../../../utils/formatName';
import BoardMemberHeader from './BoardMemberHeader';

const BoardMemberHomePage: React.FC = () => {
  let boardMemberFirstName = 'Dean';
  let boardMemberLastName = 'Sensei';

  return (
    <>
      <Helmet>
        <title>{formatName(boardMemberFirstName, boardMemberLastName)}</title>
      </Helmet>
      <div className="mt-5">
        <BoardMemberHeader
          professorFirstName={boardMemberFirstName}
          professorLastName={boardMemberLastName}
        />
        <div className="d-flex flex-column justify-content-center align-items-center align-content-center py-4">
          <h3>Dashboard</h3>
          <div className="container w-50 p-3">
            <div className="row justify-content-center">
              <InputGroup>
                <InputGroup.Text>Search by ID</InputGroup.Text>
                <Form.Control />
                <Button variant="outline-primary">Search</Button>
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardMemberHomePage;
