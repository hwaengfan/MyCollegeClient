import React, { useState } from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { clearError, setError } from '../../actions/errorAction';
import { modifyUserAction } from '../../actions/userAction';
import profileImage from '../../assets/images/unknown-profile.jpg';
import { ProfileFormData } from '../../types/DataTypes';
import { ProfileFormProps } from '../../types/PropTypes';
import { useAppDispatch, useAppSelector } from '../../types/ReduxTypes';
import formatName from '../../utils/formatName';
import ErrorBox from '../states/ErrorBox';

const ProfileForm: React.FC<ProfileFormProps> = props => {
  const [newPass, setNewPass] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentUser = useAppSelector(
    state => state.authentication.currentUserRole,
  );
  const currentPassword = useAppSelector(state => state.user.password);
  const error = useAppSelector(state => state.error);

  const handleNewPassChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    event.preventDefault();
    setNewPass(event.target.value);
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const eventTarget = event.target as typeof event.target & ProfileFormData;

    if (
      eventTarget.currentPassword &&
      eventTarget.currentPassword.value !== currentPassword
    ) {
      dispatch(setError('profile', 'Incorrect Password!'));
    } else {
      const modifiedData = {
        currentUser: currentUser,
        firstName: eventTarget.firstName.value || props.userFirstName,
        lastName: eventTarget.lastName.value || props.userLastName,
        username: eventTarget.username.value || props.userUsername,
        currentPassword: eventTarget.currentPassword
          ? eventTarget.currentPassword.value || ''
          : '',
        newPassword: eventTarget.newPassword.value || '',
        major: eventTarget.major
          ? eventTarget.major.value || props.customFieldValue
          : props.customFieldValue,
        department: eventTarget.department
          ? eventTarget.department.value || props.customFieldValue
          : props.customFieldValue,
      };
      dispatch(modifyUserAction(modifiedData));
      dispatch(clearError());
      navigate('/');
    }
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
        <Form onSubmit={handleSubmitForm}>
          <Form.Group className="mb-3">
            <Form.Label>First name</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              maxLength={50}
              placeholder={props.userFirstName}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              maxLength={50}
              placeholder={props.userLastName}
            />
          </Form.Group>
          {props.customFieldLabel && (
            <Form.Group className="mb-3">
              <Form.Label>{props.customFieldLabel}</Form.Label>
              <Form.Control
                name={props.customFieldName}
                type="text"
                placeholder={props.customFieldValue}
              />
            </Form.Group>
          )}
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              maxLength={50}
              placeholder={props.userUsername}
            />
          </Form.Group>
          {newPass.length !== 0 && (
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="currentPassword"
                type="password"
                maxLength={50}
                placeholder="current password"
                required
              />
            </Form.Group>
          )}
          <Form.Group className="mb-3">
            <Form.Label>New password</Form.Label>
            <Form.Control
              name="newPassword"
              onChange={handleNewPassChange}
              type="password"
              maxLength={50}
              placeholder="new password"
            />
          </Form.Group>
          {error.errorType === 'profile' && (
            <ErrorBox errorMessage={error.errorMessage} />
          )}
          <Button className="mt-3" variant="primary" type="submit">
            Save changes
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ProfileForm;
