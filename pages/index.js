import React from 'react';

import Page from '../components/site/Page';
import Intro from '../components/home/Intro';
import ProjectList from '../components/home/ProjectList';
import Contact from '../components/home/Contact';

import data from '../assets/data/index.json';

export default function Home({ data }) {
  return (
    <Page>
      <section className='flex xl-max:flex-col h-screen min-w-screen relative justify-start'>
        <Intro />
        <ProjectList projects={data.projects} />
        <Contact />
      </section>
    </Page>
  );
}

export async function getStaticProps(context) {
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
