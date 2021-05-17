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

function Page({ children, locomotiveOn = false }) {
  return (
    <section className='site-page flex flex-col h-screen min-h-screen'>
      <Header />
      <MobileMenu />
      {locomotiveOn && <Locomotive>{children}</Locomotive>}
      {!locomotiveOn && children}
      <Cursor />
    </section>
  );
}

export default Page;
