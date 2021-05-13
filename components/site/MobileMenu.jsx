import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setScroll, toggleMenu } from '../../store/actions/app';

import classNames from 'classnames';

export default function MobileMenu() {
  const { menuOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const onClick = (id) => {
    dispatch(toggleMenu());
    dispatch(setScroll(id));
  };

  return (
    <section
      className={classNames(
        'site-mobileMenu fixed h-screen w-full inset-y-0 left-full transform transition-transform duration-500 bg-gradient-to-br from-teal-400 to-teal-600 z-30 max-w-450 cursor-dark',
        { '-translate-x-full': menuOpen }
      )}
    >
      <div className='px-40 py-80 flex flex-col items-start space-y-60 mt-50 text-white'>
        <button
          className='heading cursor-trigger'
          onClick={() => onClick('#home')}
        >
          Robin Pillar
        </button>
        <button
          className='heading cursor-trigger'
          onClick={() => onClick('#projects')}
        >
          Projects
        </button>
        <button
          className='heading cursor-trigger'
          onClick={() => onClick('#contact')}
        >
          Contact
        </button>
      </div>
    </section>
  );
}
