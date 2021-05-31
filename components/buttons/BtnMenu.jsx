import React from 'react';

import CursorHover from '../site/CursorHover';

import { useMenu } from '../../contexts/MenuContext';

import classNames from 'classnames';

export default function BtnMenu({ classes }) {
  const { menuOpen, setMenuOpen } = useMenu();

  const onClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <CursorHover classes={classes}>
      <button
        className={classNames('btn btn--menu', {
          active: menuOpen,
        })}
        aria-label='Toggle Menu'
        onClick={onClick}
      >
        <span className='btn--menu__inner'></span>
      </button>
    </CursorHover>
  );
}
