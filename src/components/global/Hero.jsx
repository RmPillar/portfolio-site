import React from 'react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section className='global-hero'>
      <div className='h-screen flex flex-col'>
        <div className='h-full xl:h-7/12 w-full flex flex-col justify-center xl:justify-end'>
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
          className='block xl-max:hidden h-5/12 w-full cursor-arrow'
        ></Link>
      </div>
    </section>
  );
}
