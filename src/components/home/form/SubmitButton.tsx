import React from 'react';
import { ButtonProps } from '../../../types/PropTypes';
import './FormStyles.scss';

const SubmitButton: React.FC<ButtonProps> = props => {
  return (
    <div className="button space">
      <input type="submit" value={props.value} />
    </div>
  );
};

export default SubmitButton;
