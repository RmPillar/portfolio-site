import React from 'react';

import { Link } from 'react-router-dom';

import BtnMenu from '../buttons/BtnMenu';

export default function Header() {
  return (
    <section className='site-header cursor-dark'>
      <div className='flex row mx-4 items-center'>
        <Link
          className='copy-l xl:copy px-2 py-4 mr-auto cursor-trigger'
          to='/'
        >
          Robin Pillar
        </Link>
        <Link
          className='copy px-2 py-4 cursor-trigger xl-max:hidden'
          to='/about'
        >
          About
        </Link>
        <Link
          className='copy px-2 py-4 cursor-trigger xl-max:hidden'
          to='/skills'
        >
          Skills
        </Link>
        <Link
          className='copy px-2 py-4 cursor-trigger xl-max:hidden'
          to='/education'
        >
          Education
        </Link>
        <Link
          className='copy px-2 py-4 cursor-trigger xl-max:hidden'
          to='/work'
        >
          Work
        </Link>
        <Link
          className='copy px-2 py-4 cursor-trigger xl-max:hidden'
          to='/projects'
        >
          Projects
        </Link>

        <BtnMenu classes='xl:hidden z-30 relative' />
      </div>
    </section>
  );
}
