import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import Header from './Header';
import MobileMenu from './MobileMenu';
import { LocomotiveProvider } from '../../contexts/LocomotiveContext';

const Cursor = dynamic(() => import('./Cursor'), {
  ssr: false,
});

function Page({ children }) {
  return (
    <LocomotiveProvider>
      <section className='site-page flex flex-col h-screen min-h-screen'>
        <Head>
          <title>Robin Pillar</title>
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
        <Header />
        <MobileMenu />
        {children}
        <Cursor />
      </section>
    </LocomotiveProvider>
  );
}

export default Page;
