import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import UserHeader from '../../../components/user/UserHeader';

const BoardMemberHomePage: React.FC = () => {
  return (
    <>
      <div className="mt-5">
        <UserHeader />
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
