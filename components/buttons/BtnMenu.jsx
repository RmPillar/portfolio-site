import React from 'react';

import { useMenu } from '../../contexts/MenuContext';

import classNames from 'classnames';

export default function BtnMenu({ classes }) {
  const { menuOpen, setMenuOpen } = useMenu();

  const onClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <button
      className={classNames('btn btn--menu cursor-trigger', classes, {
        active: menuOpen,
      })}
      aria-label='Toggle Menu'
      onClick={onClick}
    >
      <span className='btn--menu__inner'></span>
    </button>
  );
}
