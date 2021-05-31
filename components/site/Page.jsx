import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from './Header';
import ProjectMenu from '../project/ProjectMenu';
import HomeMenu from '../home/HomeMenu';

import { LocomotiveProvider } from '../../contexts/LocomotiveContext';
import { useMenu } from '../../contexts/MenuContext';

import classNames from 'classnames';

function Page({ data, children }) {
  const router = useRouter();
  const { menuOpen, setMenuOpen } = useMenu();
  const isProject = router.pathname.includes('/project/');

  const onClick = () => {
    setMenuOpen(false);
  };

  return (
    <LocomotiveProvider>
      <Head>
        <title>Robin Pillar</title>
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Header />

      {isProject && <ProjectMenu data={data} />}
      {!isProject && <HomeMenu data={data} />}

      <section
        className='site-page flex flex-col min-h-screen'
        data-scroll-container
      >
        {children}
      </section>

      <div
        onClick={onClick}
        className={classNames(
          'fixed inset-0 w-screen h-screen bg-black transition-opacity duration-500 z-20',
          {
            'opacity-50 pointer-events-auto': menuOpen,
            'opacity-0 pointer-events-none': !menuOpen,
          }
        )}
      ></div>
    </LocomotiveProvider>
  );
}

export default Page;
