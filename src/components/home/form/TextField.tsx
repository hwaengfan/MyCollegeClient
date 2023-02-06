import React from 'react';
import { FieldProps } from '../../../types/PropTypes';
import './FormStyles.scss';

const TextField: React.FC<FieldProps> = props => {
  return (
    <div className="button space">
      <span className="fa fa-user" />
      <input
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        autoComplete="false"
        maxLength={50}
        required
      />
    </div>
  );
};

export default TextField;
