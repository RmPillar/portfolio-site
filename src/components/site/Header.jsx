import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <section className='site-header'>
      <div className='flex px-4 space-x-4'>
        <Link className='mr-auto cursor-trigger py-4 copy' to='/'>
          Robin Pillar
        </Link>
        <Link className='cursor-trigger py-4 copy' to='/about'>
          About
        </Link>
        <Link className='cursor-trigger py-4 copy' to='/skills'>
          Skills
        </Link>
        <Link className='cursor-trigger py-4 copy' to='/experience'>
          Experience
        </Link>
        <Link className='cursor-trigger py-4 copy' to='/projects'>
          Projects
        </Link>
        <Link className='cursor-trigger py-4 copy' to='/contact'>
          Contact
        </Link>
      </div>
    </section>
  );
}
