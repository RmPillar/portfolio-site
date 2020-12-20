import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../../store/actions/app';

import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';

import classNames from 'classnames';

export default function MobileMenu() {
  const { menuOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const history = useHistory();

  const onClick = (e, to) => {
    e.preventDefault();
    history.push(to);
    dispatch(toggleMenu());
  };

  return (
    <section
      className={classNames(
        'site-mobileMenu fixed xl:hidden h-screen w-screen inset-0 transition-transform duration-500 bg-gradient-to-br from-teal-500 to-teal-600 z-30',
        { 'transform translate-x-full': !menuOpen }
      )}
    >
      <div className='p-8 flex flex-col space-y-6 mt-10'>
        <Link
          className='heading text-white'
          to='/'
          onClick={(e) => {
            onClick(e, '/');
          }}
        >
          Robin Pillar
        </Link>
        <Link
          className='heading text-white'
          to='/about'
          onClick={(e) => {
            onClick(e, '/about');
          }}
        >
          About
        </Link>
        <Link
          className='heading text-white'
          to='/skills'
          onClick={(e) => {
            onClick(e, '/skills');
          }}
        >
          Skills
        </Link>
        <Link
          className='heading text-white'
          to='/education'
          onClick={(e) => {
            onClick(e, '/education');
          }}
        >
          Education
        </Link>
        <Link
          className='heading text-white'
          to='/work'
          onClick={(e) => {
            onClick(e, '/work');
          }}
        >
          Work
        </Link>
        <Link
          className='heading text-white'
          to='/projects'
          onClick={(e) => {
            onClick(e, '/projects');
          }}
        >
          Projects
        </Link>
      </div>
    </section>
  );
}
