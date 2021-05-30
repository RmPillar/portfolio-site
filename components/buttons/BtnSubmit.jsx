import React from 'react';

import { isNull } from 'lodash';

export default function BtnSubmit({ label, classes = '' }) {
  return (
    <button
      type='submit'
      className={`btn btn--block cursor-dark cursor-trigger ${classes}`}
    >
      {!isNull(label) && <span className='btn__text'>{label}</span>}
      <div className='btn__bg'></div>
    </button>
  );
}
