import React from 'react';
import PageCard from './PageCard';

export default function PageList() {
  return (
    <section
      className='home-pageList xl:h-screen xl-max:pb-10 px-5 xl:px-20 bg-gradient-to-b xl:bg-gradient-to-tl from-indigo-600 to-indigo-400'
      data-scroll-section
    >
      <div className='h-full flex md-max:flex-col xl-max:flex-wrap items-center justify-center md-max:space-y-10 xl:space-x-20 xl-max:row'>
        <PageCard title='About' body='See Who I Am' to='/about' />
        <PageCard title='Skills' body='See What I Can Do' to='/skills' />
        <PageCard title='Work' body="See What I've Been Doing" to='/work' />
        <PageCard title='Projects' body="See What I'm Doing" to='/projects' />
      </div>
    </section>
  );
}
