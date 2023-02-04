import React from 'react';
import BackgroundSection from '../../../components/home/background/BackgroundSection';
import AppLogo from '../../../components/home/logo/AppLogo';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
  return (
    <>
      <AppLogo />
      <BackgroundSection />
      <LoginForm />
    </>
  );
};

export default LoginPage;
