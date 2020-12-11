import React from 'react';

import Intro from '../components/home/Intro';
import PageList from '../components/home/PageList';

export default function Home() {
  return (
    <section
      className='flex flex-col h-screen relative justify-start'
      data-scroll-container
    >
      <Intro />
      <PageList />
      <div
        data-scroll-section
        className='w-screen h-screen bg-gradient-to-tr from-indigo-600 to-indigo-400'
      ></div>
    </section>
  );
}
