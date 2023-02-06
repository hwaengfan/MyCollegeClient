import React, { useState } from 'react';
import { FieldProps } from '../../../types/PropTypes';
import './FormStyles.scss';

const PasswordField: React.FC<FieldProps> = props => {
  const [showPass, setShowPass] = useState(false);

  const handleClickShowPass = (
    event: React.MouseEvent<HTMLSpanElement>,
  ): void => {
    event.preventDefault();
    setShowPass(!showPass);
  };

  return (
    <div className="button space">
      <span className="fa fa-lock" />
      <input
        type={showPass ? 'text' : 'password'}
        name="password"
        className="pass-key"
        placeholder={props.placeholder}
        maxLength={50}
        required
      />
      <span className="show" onClick={handleClickShowPass}>
        Show
      </span>
    </div>
  );
};

export default PasswordField;
