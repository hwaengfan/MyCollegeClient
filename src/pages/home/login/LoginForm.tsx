import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../../actions/authenticationAction';
import ErrorBox from '../../../components/states/ErrorBox';
import PasswordField from '../../../components/home/form/PasswordField';
import SubmitButton from '../../../components/home/form/SubmitButton';
import TextField from '../../../components/home/form/TextField';
import { LoginFormData } from '../../../types/DataTypes';
import { useAppDispatch, useAppSelector } from '../../../types/ReduxTypes';

const LoginForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const error = useAppSelector(state => state.error);

  const handleSubmitForm = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    const eventTarget = event.target as typeof event.target & LoginFormData;
    const loginData = {
      username: eventTarget.username.value,
      password: eventTarget.password.value,
    };
    dispatch(loginAction(loginData));
    navigate('/');
  };

  return (
    <div className="form-container">
      <header className="header">Login</header>
      <form className="form" ref={formRef} onSubmit={handleSubmitForm}>
        <TextField name="username" placeholder="username" />
        <PasswordField name="password" placeholder="password" />
        {error.errorType === 'login' && (
          <ErrorBox errorMessage={error.errorMessage} />
        )}
        <SubmitButton value="Verify" />
      </form>
      <span className="footer">
        Don't have account?{' '}
        <span onClick={() => navigate('/signup')}>Signup Now</span>
      </span>
    </div>
  );
};

export default LoginForm;
