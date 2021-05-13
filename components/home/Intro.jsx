import React from 'react';

export default function Intro() {
  return (
    <section
      data-scroll-section
      className='global-pageIntro min-h-screen h-screen min-w-screen bg-gray-100'
      id='home'
    >
      <div className='container flex flex-col justify-center h-full my-auto'>
        <h1
          className='heading-2xl text-gradient bg-gradient-to-tr from-indigo-700 to-indigo-400 xl-max:mb-20'
          data-scroll
          data-scroll-speed='3'
          data-scroll-direction='vertical'
        >
          Robin Pillar
        </h1>

        <h2
          className='heading-s text-gray-900'
          data-scroll
          data-scroll-speed='-3'
          data-scroll-direction='vertical'
        >
          Developer - Sheffield
        </h2>
      </div>
    </section>
  );
}
