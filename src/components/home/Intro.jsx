import React from 'react';

export default function Intro() {
  return (
    <section
      data-scroll-section
      className='global-pageIntro h-screen w-screen bg-gradient-to-t xl:bg-gradient-to-tr from-indigo-800 to-indigo-400'
    >
      <div className='container flex flex-col justify-center h-full'>
        <h1
          className='heading-2xl heading-2xl--outline text-white xl-max:mb-4'
          data-scroll
          data-scroll-speed='3'
          data-scroll-direction='vertical'
        >
          Robin Pillar
        </h1>

        <h2
          className='heading-s text-white'
          data-scroll
          data-scroll-speed='-3'
          data-scroll-direction='vertical'
        >
          Frontend Developer - Sheffield
        </h2>
      </div>
    </section>
  );
}
