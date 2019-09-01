import React from 'react';

const Input = ({ label, name, register, errors, ...rest }) => {
  return (
    <div className={errors[name] ? ' error' : ''}>
      <label className={`label${errors[name] ? ' error' : ''}`} htmlFor={name}>
        {label}
      </label>
      <input name={name} ref={register} {...rest} />
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
};

export default Input;
