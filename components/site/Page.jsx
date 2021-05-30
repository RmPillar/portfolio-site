import React from 'react';

import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from './Header';

import { LocomotiveProvider } from '../../contexts/LocomotiveContext';
import ProjectMenu from '../project/ProjectMenu';
import HomeMenu from '../home/HomeMenu';

const Cursor = dynamic(() => import('./Cursor'), {
  ssr: false,
});

function Page({ data, children }) {
  const router = useRouter();
  const isProject = router.pathname.includes('/project/');

  return (
    <LocomotiveProvider>
      <Head>
        <title>Robin Pillar</title>
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Header />
      <Cursor />
      {isProject && <ProjectMenu data={data} />}
      {!isProject && <HomeMenu data={data} />}
      <section
        className='site-page flex flex-col min-h-screen'
        data-scroll-container
      >
        {children}
      </section>
    </LocomotiveProvider>
  );
}

export default Page;
