import React from 'react';
import './AppLogo.scss';

const AppLogo: React.FC = () => {
  return (
    <div className="logo-container">
      <div className="max-width">
        <div className="logo">
          <a href="/">
            My<span>College</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppLogo;
