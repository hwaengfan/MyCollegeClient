import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupAction } from '../../../actions/authenticationAction';
import PasswordField from '../../../components/home/form/PasswordField';
import SubmitButton from '../../../components/home/form/SubmitButton';
import TextField from '../../../components/home/form/TextField';
import { SignupFormData } from '../../../types/DataTypes';
import { useAppDispatch } from '../../../types/ReduxTypes';

const SignupPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmitForm = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    const eventTarget = event.target as typeof event.target & SignupFormData;
    const signupData = {
      firstName: eventTarget.firstName.value,
      lastName: eventTarget.lastName.value,
      username: eventTarget.username.value,
      password: eventTarget.password.value,
    };
    dispatch(signupAction(signupData));
    navigate('/');
  };

  return (
    <div className="form-container">
      <header className="header">New Account</header>
      <form className="form" ref={formRef} onSubmit={handleSubmitForm}>
        <TextField name="firstName" placeholder="First name" />
        <TextField name="lastName" placeholder="Last name" />
        <TextField name="username" placeholder="username" />
        <PasswordField name="password" placeholder="password" />
        <SubmitButton value="Create account" />
      </form>
      <span className="footer">
        Have account? <span onClick={() => navigate('/')}>Login Now</span>
      </span>
    </div>
  );
};

export default SignupPage;
