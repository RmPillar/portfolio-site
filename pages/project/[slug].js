import React from 'react';

import Page from '../../components/site/Page';
import Hero from '../../components/project/Hero';
import Intro from '../../components/project/Intro';
import TechStack from '../../components/project/TechStack';
import Links from '../../components/project/Links';

import data from '../../assets/data/index.json';

export default function ProjectPage({ project, projects }) {
  return (
    <Page data={projects}>
      <div className='flex flex-col'>
        <Hero data={project} />
        <Intro data={project} classes='mb-50' />
        <div className='container'>
          <div className='lg:flex row'>
            <div className='column lg:w-6/12'>
              <TechStack data={project} classes='mb-50' />
            </div>
            <div className='column lg:w-6/12'>
              <Links data={project} classes='pb-50' />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export async function getStaticPaths() {
  const paths = data.projects.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const [project] = data.projects.filter((project) => project.slug === slug);
  return {
    props: { project, projects: data.projects },
  };
}
