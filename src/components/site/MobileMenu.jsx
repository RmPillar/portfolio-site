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
        'site-mobileMenu fixed h-screen w-full inset-y-0 right-0 transition-transform duration-500 bg-gradient-to-br from-teal-500 to-teal-600 z-30 max-w-90 cursor-dark',
        { 'transform translate-x-full': !menuOpen }
      )}
    >
      <div className='p-8 flex flex-col items-start space-y-6 mt-10  text-white'>
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
