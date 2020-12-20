import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <section className='site-header cursor-dark'>
      <div className='flex row mx-4'>
        <Link className='copy px-2 py-4 mr-auto cursor-trigger' to='/'>
          Robin Pillar
        </Link>
        <Link className='copy px-2 py-4 cursor-trigger' to='/about'>
          About
        </Link>
        <Link className='copy px-2 py-4 cursor-trigger' to='/skills'>
          Skills
        </Link>
        <Link className='copy px-2 py-4 cursor-trigger' to='/education'>
          Education
        </Link>
        <Link className='copy px-2 py-4 cursor-trigger' to='/work'>
          Work
        </Link>
        <Link className='copy px-2 py-4 cursor-trigger' to='/projects'>
          Projects
        </Link>
      </div>
    </section>
  );
}
