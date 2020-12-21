import React, { forwardRef } from 'react';
import classNames from 'classnames';

export default forwardRef(function Input(
  { label, placeholder, name, errors, classes },
  ref
) {
  return (
    <span>
      <label className='form-label'>{label}</label>
      <input
        className={classNames('form-input', classes)}
        name={name}
        placeholder={placeholder}
        ref={ref}
      />
      {errors[name] && (
        <span className='form-error'>{errors[name].message}</span>
      )}
    </span>
  );
});
