import React from 'react';
import { Helmet } from 'react-helmet-async';
import './LoadingState.scss';

const LoadingState: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Loading...</title>
      </Helmet>
      <figure>
        <div className="dot white"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </figure>
    </>
  );
};

export default LoadingState;
