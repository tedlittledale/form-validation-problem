import React from 'react';

import ErrorMessage from './ErrorMessage';

const Input = ({ label, name, options, register, errors, ...rest }) => {
  return (
    <div className={errors[name] ? ' error' : ''}>
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <select name={name} {...rest} ref={register}>
        <option value="">Choose {label}</option>
        {options.map(({ value, label }, idx) => (
          <option key={idx} value={value}>
            {label}
          </option>
        ))}
      </select>

      {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
    </div>
  );
};

export default Input;
