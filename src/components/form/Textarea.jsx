import React, { forwardRef } from 'react';
import classNames from 'classnames';

export default forwardRef(function Textarea(
  { label, placeholder, name, errors, classes },
  ref
) {
  return (
    <>
      <label className='form-label'>{label}</label>
      <textarea
        className={classNames('form-textarea cursor-dark', { classes })}
        name={name}
        placeholder={placeholder}
        ref={ref}
      />
      {errors[name] && (
        <span className='form-error'>{errors[name].message}</span>
      )}
    </>
  );
});
