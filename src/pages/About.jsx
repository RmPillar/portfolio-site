import React from 'react';
import Slider from '../components/global/Slider';

import data from '../assets/data';

export default function About() {
  return (
    <section className='page-about h-full overflow-hidden'>
      <h1 className='heading-xl text-center mb-8'>{data.about.heading}</h1>
      <Slider slides={data.about.slides} />
    </section>
  );
}
