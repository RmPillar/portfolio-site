import React from 'react';
import { Link } from 'react-router-dom';
import BtnMenu from '../buttons/BtnMenu';

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <section className='site-header'>
      <div className='flex xl-max:justify-end items-center px-4 space-x-4'>
        <Link className='mr-auto cursor-trigger py-4 copy xl-max:hidden' to='/'>
          Robin Pillar
        </Link>
        <Link className='cursor-trigger py-4 copy xl-max:hidden' to='/about'>
          About
        </Link>
        <Link className='cursor-trigger py-4 copy xl-max:hidden' to='/skills'>
          Skills
        </Link>
        <Link
          className='cursor-trigger py-4 copy xl-max:hidden'
          to='/experience'
        >
          Experience
        </Link>
        <Link className='cursor-trigger py-4 copy xl-max:hidden' to='/projects'>
          Projects
        </Link>
        <Link className='cursor-trigger py-4 copy xl-max:hidden' to='/contact'>
          Contact
        </Link>

        <div className='xl-max:py-6 z-10 relative'>
          <BtnMenu active={menuOpen} setActive={setMenuOpen} />
        </div>
      </div>
    </section>
  );
}
