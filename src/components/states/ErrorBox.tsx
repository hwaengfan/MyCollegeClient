import React from 'react';
import { ErrorBoxProps } from '../../types/PropTypes';
import './ErrorBox.scss';

const ErrorBox: React.FC<ErrorBoxProps> = props => {
  return (
    <>
      <p className="error">{props.errorMessage}</p>
    </>
  );
};

export default ErrorBox;
