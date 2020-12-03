import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { ReactComponent as Github } from '../../assets/svg/github.svg';
import { ReactComponent as Instagram } from '../../assets/svg/instagram.svg';
import { ReactComponent as Linkedin } from '../../assets/svg/linkedin.svg';

export default function MobileMenu({ menuOpen }) {
  return (
    <section
      className={classNames(
        'site-mobileMenu xl:hidden fixed md-max:inset-0 md:inset-y-0 md:right-0 w-full bg-gray-900 transition-transform duration-500 ease-out transform z-20 h-full',
        {
          'translate-x-0': menuOpen,
          'translate-x-full': !menuOpen,
        }
      )}
      style={{ maxWidth: '500px' }}
    >
      <div className='flex flex-col px-8 pt-14 pb-10 h-full'>
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
        <div className='flex space-x-6 mt-auto items-end'>
          <a
            href='https://www.instagram.com/rmpillar/'
            className='md:my-8 transition-transform duration-300 transform hover:scale-125 md:block'
          >
            <span className='block text-white site-mobileMenu__social'>
              <Instagram />
            </span>
          </a>

          <a
            href='https://www.linkedin.com/in/robin-pillar-b5500888/'
            className='md:my-8 transition-transform duration-300 transform hover:scale-125 md:block'
          >
            <span className='block text-white site-mobileMenu__social'>
              <Linkedin />
            </span>
          </a>

          <a
            href='https://github.com/RmPillar'
            className='md:my-8 transition-transform duration-300 transform hover:scale-125 md:block'
          >
            <span className='block text-white site-mobileMenu__social'>
              <Github />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
