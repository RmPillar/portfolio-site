import classNames from 'classnames';
import React from 'react';
import ReactMarkdown from 'react-markdown';

function Intro({ data, classes }) {
  return (
    <section className={classNames('project-intro', classes)}>
      <div className='container'>
        <div className='rich-content'>
          <ReactMarkdown>{data.description}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
}

export default Intro;
