import React from 'react';

import CursorHover from '../site/CursorHover';

import { useLocomotive } from '../../contexts/LocomotiveContext';
import { useMenu } from '../../contexts/MenuContext';

function BtnScroll({ label = '', scrollTo }) {
  const locomotive = useLocomotive();
  const { setMenuOpen } = useMenu();

  const onClick = () => {
    const target = document.querySelector(scrollTo);
    locomotive.scrollTo(target, {
      offset: -100,
      easing: [0.16, 1, 0.3, 1],
      duration: 2000,
    });
    setMenuOpen(false);
  };

  return (
    <CursorHover>
      <button className='heading ' onClick={onClick}>
        {label}
      </button>
    </CursorHover>
  );
}

export default BtnScroll;
