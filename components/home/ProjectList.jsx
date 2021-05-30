import React from 'react';

import Card from './Card';
import ScrollSection from './ScrollSection';

export default function ProjectList({ projects }) {
  return (
    <ScrollSection
      heading='Projects'
      id='projects'
      theme='indigo'
      classes='home-projectsList'
    >
      <div className='xl:flex items-center h-full'>
        <div className='flex md-max:flex-col xl-max:flex-wrap items-center justify-center md-max:space-y-50 xl:space-x-100 xl-max:row xl:mt-100'>
          {projects.map((project, index) => (
            <Card project={project} index={index} key={index} />
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}
