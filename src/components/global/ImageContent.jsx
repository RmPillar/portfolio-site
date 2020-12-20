import { isEmpty } from 'lodash';
import React from 'react';

import Image from './Image';
import ReactMarkdown from 'react-markdown';

import classNames from 'classnames';

export default function ImageContent({
  data: { image, body, direction = 'left' },
  classes = '',
}) {
  return (
    <section className={classNames('global-imageContent', { classes })}>
      <div
        className={classNames('flex row', {
          'flex-row-reverse': direction === 'right',
        })}
      >
        <div className='column w-6/12'>
          {!isEmpty(image) && (
            <figure
              className={classNames('overflow-hidden', {
                'rounded-br-20 rounded-tr-20': direction === 'left',
                'rounded-bl-20 rounded-tl-20': direction === 'right',
              })}
            >
              <Image src={image.url} alt={image.alt} />
            </figure>
          )}
        </div>
        <div className='column w-4/12 mx-1/12'>
          {!isEmpty(body) && (
            <div className='rich-content text-center flex flex-col justify-center h-full'>
              <ReactMarkdown>{body}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
