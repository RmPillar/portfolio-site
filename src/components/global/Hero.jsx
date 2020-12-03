import React from 'react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section className='global-hero'>
      <div className='h-screen flex flex-col'>
        <div className='h-7/12 w-full flex flex-col justify-end'>
          <div className='container'>
            <h1 className='heading-2xl heading-2xl--outline text-indigo-700 xl-max:mb-4'>
              Robin Pillar
            </h1>
            <h1 className='heading-s text-indigo-500'>
              Frontend Developer - Sheffield
            </h1>
          </div>
        </div>
        <Link
          to='first'
          smooth={true}
          className='h-5/12 w-full cursor-arrow flex items-center justify-center'
        >
          <h4 className='heading-s text-teal-500'>Enter Site</h4>
        </Link>
      </div>
    </section>
  );
}
