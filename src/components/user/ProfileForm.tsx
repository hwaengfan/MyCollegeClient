import React, { useState } from 'react';
import profileImage from '../../assets/images/unknown-profile.jpg';
import { Button, Form, Image } from 'react-bootstrap';
import formatName from '../../utils/formatName';
import { ProfileFormProps } from '../../types/PropTypes';

const ProfileForm: React.FC<ProfileFormProps> = props => {
  const [newPass, setNewPass] = useState('');

  const handleNewPassChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setNewPass(event.target.value);
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center text-center p-3">
        <Image style={{ width: '150px' }} src={profileImage} roundedCircle />
        <span className="font-weight-bold">
          {formatName(props.userFirstName, props.userLastName)}
        </span>
        <span className="text-black-50">{props.userEmail}</span>
      </div>
      <div className="container w-50 p-3">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder={props.userFirstName} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder={props.userLastName} />
          </Form.Group>
          {props.customFieldLabel === null && (
            <Form.Group className="mb-3">
              <Form.Label>{props.customFieldLabel}</Form.Label>
              <Form.Control type="text" placeholder={props.customFieldValue} />
            </Form.Group>
          )}
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder={props.userUsername} />
          </Form.Group>
          {newPass.length !== 0 && (
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="current password"
                required
              />
            </Form.Group>
          )}
          <Form.Group className="mb-3">
            <Form.Label>New password</Form.Label>
            <Form.Control
              onChange={handleNewPassChange}
              type="password"
              placeholder="new password"
            />
          </Form.Group>
          <Button className="mt-3" variant="primary" type="submit">
            Save changes
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ProfileForm;
