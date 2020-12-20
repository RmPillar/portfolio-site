import React from 'react';

import Header from '../components/site/Header';
import Hero from '../components/global/Hero';
import Layout from '../components/global/Layout';

import { isEmpty } from 'lodash';

export default function FlexiblePage({ data }) {
  return (
    <section className='page-flexible h-full overflow-hidden bg-gray-100'>
      <Header />

      {!isEmpty(data.hero) && <Hero data={data.hero} />}
      <div
        className='rounded-t-full min-h-30 h-30 w-full bg-gradient-to-br from-indigo-500 to-indigo-600'
        data-scroll-section
      ></div>
      <Layout data={data.layout} />
    </section>
  );
}
