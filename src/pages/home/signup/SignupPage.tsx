import React from 'react';
import BackgroundSection from '../../../components/home/background/BackgroundSection';
import AppLogo from '../../../components/home/logo/AppLogo';
import SignupForm from './SignupForm';

const SignupPage: React.FC = () => {
  return (
    <>
      <AppLogo />
      <BackgroundSection />
      <SignupForm />
    </>
  );
};

export default SignupPage;
