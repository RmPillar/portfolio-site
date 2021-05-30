import React from 'react';

import SvgIcon from '../global/SvgIcon';

import classNames from 'classnames';

function TechStack({ data: { stack }, classes = '' }) {
  return (
    <section className={classNames('project-techStack', classes)}>
      <h3 className='heading mb-20'>Tech Stack</h3>
      <div className='space-y-20'>
        {stack.map((item, index) => (
          <div key={index} className='flex items-center mr-40'>
            <div className='h-75 w-75 mr-20'>
              {item.icon && (
                <div className='w-75 h-75 rounded-full flex items-center justify-center bg-gradient-to-tr from-teal-400 to-teal-600'>
                  <span className='block w-40 min-w-40 text-white'>
                    <SvgIcon icon={item.icon} height={1} width={1} />
                  </span>
                </div>
              )}
            </div>
            {item.title && <h5 className='heading-2xs'>{item.title}</h5>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
