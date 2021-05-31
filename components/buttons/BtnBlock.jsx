import React from 'react';

import Link from 'next/link';

import CursorHover from '../site/CursorHover';
import SvgIcon from '../global/SvgIcon';

function BtnIcon({ label, url, icon, classes = '' }) {
  return (
    <CursorHover classes={classes}>
      <Link href={url}>
        <a className='btn btn--block'>
          {icon && (
            <span className='btn__icon'>
              <SvgIcon icon={icon} height={1} width={1} />
            </span>
          )}
          {label && <span className='btn__text'>{label}</span>}
          <div className='btn__bg'></div>
        </a>
      </Link>
    </CursorHover>
  );
}

export default BtnIcon;
