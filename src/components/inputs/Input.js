import React from 'react';

const Input = ({ label, name, id, register, errors, ...rest }) => {
  return (
    <div className={errors[name] ? ' error' : ''}>
      <label className={`label${errors[name] ? ' error' : ''}`} htmlFor={id}>
        {label}
      </label>
      <input name={name} ref={register} id={id} {...rest} />
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
};

export default Input;
