import classNames from 'classnames';
import { isEmpty } from 'lodash';
import React from 'react';
import SvgIcon from '../global/SvgIcon';

function TechStack({ data: { stack }, classes = '' }) {
  console.log(stack);
  return (
    <section className={classNames('project-techStack', classes)}>
      <div className='container'>
        <div className='flex flex-wrap'>
          {stack.map((item, index) => (
            <div key={index} className='flex items-center mr-40'>
              {item.icon && (
                <div className='w-75 h-75 rounded-full flex items-center justify-center bg-gradient-to-tr from-teal-400 to-teal-600 mr-10 '>
                  <span className='block w-40 min-w-40 text-white'>
                    <SvgIcon icon={item.icon} height={1} width={1} />
                  </span>
                </div>
              )}
              {item.title && <h5 className='heading-2xs'>{item.title}</h5>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
