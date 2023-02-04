import React from 'react';
import './BackgroundSection.scss';

const BackgroundSection: React.FC = () => {
  return (
    <div className="background-container">
      <div className="max-width">
        <div className="overlay dark"></div>
      </div>
    </div>
  );
};

export default BackgroundSection;
