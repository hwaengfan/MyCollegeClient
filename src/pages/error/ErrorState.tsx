import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ErrorState.scss';

const ErrorState: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <div className="error-container">
        <div className="error-typing">
          <h1>Error 404</h1>
        </div>
      </div>
    </>
  );
};

export default ErrorState;
