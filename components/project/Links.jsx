import React from 'react';

import BtnBlock from '../buttons/BtnBlock';

import classNames from 'classnames';

function Links({ data: { links }, classes }) {
  return (
    <section className={classNames('project-links', classes)}>
      <h3 className='heading mb-20'>Links</h3>
      <div className='flex flex-wrap items-start -mr-20 -mb-20'>
        {links.map((link, index) => (
          <BtnBlock
            key={index}
            label={link.label}
            icon={link.icon}
            url={link.url}
            classes='w-10/12 xl:w-5/12 mr-20 mb-20'
          />
        ))}
      </div>
    </section>
  );
}

export default Links;
