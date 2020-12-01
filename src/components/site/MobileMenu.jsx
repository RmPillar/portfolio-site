import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default function MobileMenu({ menuOpen }) {
  return (
    <section
      className={classNames(
        'site-mobileMenu xl:hidden fixed md-max:inset-0 md:inset-y-0 md:right-0 w-full bg-gray-900 transition-transform duration-500 transform',
        {
          'translate-x-0': menuOpen,
          'translate-x-full': !menuOpen,
        }
      )}
      style={{ maxWidth: '500px' }}
    >
      <div className='flex flex-col px-8 py-14'>
        <Link
          className='mr-auto cursor-trigger py-4 heading text-gray-200'
          to='/'
        >
          Home
        </Link>
        <Link className='cursor-trigger py-4 heading text-gray-200' to='/about'>
          About
        </Link>
        <Link
          className='cursor-trigger py-4 heading text-gray-200'
          to='/skills'
        >
          Skills
        </Link>
        <Link
          className='cursor-trigger py-4 heading text-gray-200'
          to='/experience'
        >
          Experience
        </Link>
        <Link
          className='cursor-trigger py-4 heading text-gray-200'
          to='/projects'
        >
          Projects
        </Link>
        <Link
          className='cursor-trigger py-4 heading text-gray-200'
          to='/contact'
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
