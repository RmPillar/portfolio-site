import React from 'react';

import ReactMarkdown from 'react-markdown';

import { isEmpty } from 'lodash';

export default function Content({ data: { body }, classes = '' }) {
  return (
    <section className='global-content'>
      {!isEmpty(body) && (
        <div className='rich-content text-center w-10/12 mx-auto'>
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      )}
    </section>
  );
}
