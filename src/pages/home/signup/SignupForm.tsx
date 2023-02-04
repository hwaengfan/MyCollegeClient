import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { formData } from '../../../types/DataTypes';
import PasswordField from '../../../components/home/form/PasswordField';
import SubmitButton from '../../../components/home/form/SubmitButton';
import TextField from '../../../components/home/form/TextField';

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmitForm = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    const target = event.target as typeof event.target & formData;
    alert(
      'First name: ' +
        target.firstName.value +
        '\nLast name: ' +
        target.lastName.value +
        '\nUsername: ' +
        target.username.value +
        '\nPassword: ' +
        target.password.value,
    );
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
