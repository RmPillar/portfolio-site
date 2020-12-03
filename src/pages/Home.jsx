import React from 'react';

import Hero from '../components/global/Hero';

export default function Home() {
  return (
    <section className='page-home'>
      <Hero />
      <div
        id='first'
        className='h-screen w-full flex justify-center items-center'
      >
        <h1 className='heading-2xl'>This is the first thing</h1>
      </div>
    </section>
  );
}
