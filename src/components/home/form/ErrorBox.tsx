import React from 'react';
import { ErrorBoxProps } from '../../../types/PropTypes';

const ErrorBox: React.FC<ErrorBoxProps> = props => {
  return (
    <>
      <p className="space error">{props.errorMessage}</p>
    </>
  );
};

export default ErrorBox;
