import React from 'react';
import Card from './Card';

export default function List() {
  return (
    <section
      className='home-list xl:h-screen xl-max:pb-10 px-5 xl:px-20 bg-gradient-to-b xl:bg-gradient-to-tl from-indigo-600 to-indigo-400'
      data-scroll-section
    >
      <div className='h-full flex md-max:flex-col xl-max:flex-wrap items-center justify-center md-max:space-y-10 xl:space-x-20 xl-max:row'>
        <Card title='About' body='Who I Am' to='/about' />
        <Card title='Skills' body='What I Can Do' to='/skills' />
        <Card title='Education' body="What I've Learnt" to='/education' />
        <Card title='Work' body="What I've Been Doing" to='/work' />
        <Card title='Projects' body="What I'm Doing" to='/projects' />
      </div>
    </section>
  );
}
