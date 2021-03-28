import React from 'react';
import dynamic from 'next/dynamic';

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
      <Locomotive>{children}</Locomotive>
    </section>
  );
}

export default Page;
