import React from 'react';
import Card from './Card';

export default function List() {
  return (
    <section
      className='home-list xl:h-screen xl-max:pb-10 px-5 xl:px-20 bg-gray-100'
      id='projects'
      data-scroll-section
    >
      <div className='h-full flex md-max:flex-col xl-max:flex-wrap items-center justify-center md-max:space-y-10 xl:space-x-20 xl-max:row'>
        <Card title='Robin Pillar' caption='Web' />
        <Card title='Pokemon Adventure' caption='Mobile App' />
        <Card title='RecipeBook' caption='Web & Mobile App' />
        <Card title='Daily Quests' caption='Mobile App' />
      </div>
    </section>
  );
}
