import classNames from 'classnames';
import React from 'react';

function Intro({ data, classes }) {
  return (
    <section className={classNames('project-intro', classes)}>
      <div className='container'>
        <p className='copy-l'>{data.description}</p>
      </div>
    </section>
  );
}

export default Intro;
