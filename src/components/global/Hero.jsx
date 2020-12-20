import React from 'react';

import ReactMarkdown from 'react-markdown';

import { useDispatch } from 'react-redux';
import { setScroll } from '../../store/actions/app';

import classNames from 'classnames';
import { isEmpty } from 'lodash';

export default function Hero({ data: { heading, body }, classes = '' }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setScroll('#first'));
  };

  return (
    <section
      className={classNames(
        'global-hero flex min-h-90 cursor-dark w-full h-full',
        {
          classes,
        }
      )}
      onClick={onClick}
    >
      <div className='container my-auto'>
        <div className='flex flex-col items-center justify-center'>
          {!isEmpty(heading) && (
            <h1 className='heading-2xl text-gradient bg-gradient-to-tr from-teal-600 to-teal-400'>
              {heading}
            </h1>
          )}
          {!isEmpty(body) && (
            <div className='rich-content text-center'>
              <ReactMarkdown>{body}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
