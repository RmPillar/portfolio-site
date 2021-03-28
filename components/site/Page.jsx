import React from 'react';
import dynamic from 'next/dynamic';
import Header from './Header';
import MobileMenu from './MobileMenu';

const Locomotive = dynamic(() => import('./Locomotive'), {
  ssr: false,
});

const Cursor = dynamic(() => import('./Cursor'), {
  ssr: false,
});

function Page({ children }) {
  return (
    <section className='site-page flex flex-col min-h-screen'>
      <Cursor />
      <Header />
      <MobileMenu />
      <Locomotive>{children}</Locomotive>
    </section>
  );
}

export default Page;
