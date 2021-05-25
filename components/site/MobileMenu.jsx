import React from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../../store/actions/app';
import { useLocomotive } from '../../contexts/LocomotiveContext';

import classNames from 'classnames';

export default function MobileMenu() {
  const router = useRouter();
  const locomotive = useLocomotive();
  const isProject = router.pathname.includes('/project/');
  const { menuOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const onClick = (id) => {
    if (!isProject) {
      const target = document.querySelector(id);
      locomotive.scrollTo(target, {
        offset: -100,
        easing: [0.16, 1, 0.3, 1],
        duration: 2000,
      });
      dispatch(toggleMenu());
      // dispatch(setScroll(id));
    }
  };

  return (
    <section
      className={classNames(
        'site-mobileMenu fixed h-screen w-full inset-y-0 left-full transform transition-transform duration-500 bg-gradient-to-br from-teal-400 to-teal-600 z-30 max-w-450 cursor-dark',
        { '-translate-x-full': menuOpen }
      )}
    >
      <div className='px-40 py-80 flex flex-col items-start space-y-60 mt-50 text-white'>
        <Link href='/'>
          <a className='heading cursor-trigger'>Robin Pillar</a>
        </Link>
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
