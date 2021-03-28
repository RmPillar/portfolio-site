import React from 'react';
import Card from './Card';

export default function List({ projects }) {
  return (
    <section
      className='home-list w-auto xl:h-screen xl-max:pb-50 xl:px-100 bg-gray-100 xl-max:container'
      id='projects'
      data-scroll-section
    >
      <h1
        className='heading-2xl text-gradient bg-gradient-to-tr from-indigo-700 to-indigo-300 xl:absolute inset-x-0 text-center xl:mt-40 xl-max:mb-20'
        data-scroll
        data-scroll-speed={-3}
      >
        Projects
      </h1>
      <div className='xl:flex items-center h-full'>
        <div className='flex md-max:flex-col xl-max:flex-wrap items-center justify-center md-max:space-y-50 xl:space-x-100 xl-max:row xl:mt-100'>
          {projects.map((project, index) => (
            <Card project={project} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
