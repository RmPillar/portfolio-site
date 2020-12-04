import React from 'react';

import Hero from '../global/Hero';
import SectionIntro from '../global/SectionIntro';

export default function Page() {
  return (
    <section className='site-page'>
      <Hero />
      <SectionIntro componentID={'first'} body='About Me' />
      <div id='second' className='h-screen'></div>
    </section>
  );
}
