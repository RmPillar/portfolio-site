import React from 'react';

import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../store/actions/app';
import { useLocomotive } from '../../contexts/LocomotiveContext';

function BtnScroll({ label = '', scrollTo }) {
  const locomotive = useLocomotive();
  const dispatch = useDispatch();

  const onClick = () => {
    const target = document.querySelector(scrollTo);
    locomotive.scrollTo(target, {
      offset: -100,
      easing: [0.16, 1, 0.3, 1],
      duration: 2000,
    });
    dispatch(toggleMenu());
  };

  return (
    <button className='heading cursor-trigger' onClick={onClick}>
      {label}
    </button>
  );
}

export default BtnScroll;
