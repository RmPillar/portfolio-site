import React from 'react';
import { isNull } from 'lodash';

export default function BtnBlock({ label, url, classes = '' }) {
  return (
    <button className={`btn btn--block cursor-trigger ${classes}`} href={url}>
      {!isNull(label) && <span className='btn__text'>{label}</span>}
      <div className='btn__bg'></div>
    </button>
  );
}
