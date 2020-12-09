import React from 'react';

import Hero from '../global/Hero';
import SectionIntro from '../global/SectionIntro';
import ImageContent from '../global/ImageContent';
import Footer from './Footer';

export default function Page() {
  return (
    <section className='site-page'>
      <Hero />
      <SectionIntro componentID={'first'} body='About Me' />
      <ImageContent componentID={'second'} />
      <div className='h-screen' data-scroll-section></div>
      <Footer />
      <div data-scroll-section className='pt-15'></div>
    </section>
  );
}
