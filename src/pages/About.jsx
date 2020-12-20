import React from 'react';

import Hero from '../components/global/Hero';

import { isEmpty } from 'lodash';

export default function About({ data }) {
  return (
    <section className='page-about h-full overflow-hidden'>
      {!isEmpty(data.hero) && <Hero data={data.hero} />}
      <div
        className='rounded-t-full h-30 w-full bg-gradient-to-br from-indigo-500 to-indigo-600'
        id='first'
      ></div>
      <div className='h-screen w-full bg-gradient-to-tr from-indigo-500 to-indigo-600'></div>
    </section>
  );
}
