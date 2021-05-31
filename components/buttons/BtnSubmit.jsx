import React from 'react';

import CursorHover from '../site/CursorHover';

import { isNull } from 'lodash';

export default function BtnSubmit({ label, classes = '' }) {
  return (
    <CursorHover dark={true} classes={classes}>
      <button type='submit' className='btn btn--block'>
        {!isNull(label) && <span className='btn__text'>{label}</span>}
        <div className='btn__bg'></div>
      </button>
    </CursorHover>
  );
}
