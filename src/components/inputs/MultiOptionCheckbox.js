import React, { Fragment } from 'react';

import ErrorMessage from './ErrorMessage';

const MultiOptionCheckbox = ({
  label,
  options,
  name,
  register,
  errors,
  ...rest
}) => {
  return (
    <div className={errors[name] ? ' error' : ''}>
      <span className="label">{label}</span>
      {options.map(({ label, optionName }, idx) => (
        <Fragment key={idx}>
          <input
            type="checkbox"
            name={`${name}.${optionName}`}
            value={optionName}
            id={`${name}${optionName}`}
            ref={register}
          />
          <label htmlFor={`${name}${optionName}`}>{label}</label>
        </Fragment>
      ))}

      {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
    </div>
  );
};

export default MultiOptionCheckbox;
