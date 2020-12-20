import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../store/actions/app';

import classNames from 'classnames';

export default function BtnMenu({ classes }) {
  const dispatch = useDispatch();
  const { menuOpen } = useSelector((state) => state.app);

  const onClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <button
      className={classNames('btn btn--menu', classes, { active: menuOpen })}
      aria-label='Toggle Menu'
      onClick={onClick}
    >
      <span className='btn--menu__inner'></span>
    </button>
  );
}
