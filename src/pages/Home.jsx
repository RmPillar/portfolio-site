import React from 'react';

import Intro from '../components/home/Intro';
import List from '../components/home/List';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <section
      className='flex xl-max:flex-col h-screen relative justify-start'
      data-scroll-container
    >
      <Intro />
      <List />
      <Contact />
    </section>
  );
}
