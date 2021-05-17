import React from 'react';

function Hero({ data }) {
  return (
    <section className='project-hero min-h-8/12'>
      <div className='container h-full flex flex-col items-center justify-center'>
        <h1 className='heading-2xl text-gradient bg-gradient-to-tr from-indigo-700 to-indigo-400'>
          {data.title}
        </h1>
      </div>
    </section>
  );
}

export default Hero;
