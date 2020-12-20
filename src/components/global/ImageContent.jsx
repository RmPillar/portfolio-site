import { isEmpty } from 'lodash';
import React from 'react';

import Image from './Image';
import ReactMarkdown from 'react-markdown';

import classNames from 'classnames';

export default function ImageContent({
  data: { image, body, imagePosition = 'left', id },
  classes = '',
}) {
  return (
    <section className={classNames('global-imageContent', { classes })} id={id}>
      <div className='container'>
        <div
          className={classNames('flex row', {
            'flex-row-reverse': imagePosition === 'right',
          })}
        >
          <div className='column w-6/12'>
            {!isEmpty(image) && (
              <figure className='overflow-hidden rounded-20'>
                <Image src={image.url} alt={image.alt} />
              </figure>
            )}
          </div>
          <div className='column w-6/12'>
            {!isEmpty(body) && (
              <div className='rich-content text-center flex flex-col justify-center h-full text-gray-100'>
                <ReactMarkdown>{body}</ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
