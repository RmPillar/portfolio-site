import React from 'react';

import Link from 'next/link';

import SvgIcon from '../global/SvgIcon';

import classNames from 'classnames';

function BtnIcon({ label, url, icon, classes = '' }) {
  return (
    <Link href={url}>
      <a className={classNames('btn btn--block', classes)}>
        {icon && (
          <span className='btn__icon'>
            <SvgIcon icon={icon} height={1} width={1} />
          </span>
        )}
        {label && <span className='btn__text'>{label}</span>}
        <div className='btn__bg'></div>
      </a>
    </Link>
  );
}

export default BtnIcon;
