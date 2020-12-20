import React from 'react';

import ImageContent from '../global/ImageContent';
import Content from '../global/Content';
import Slider from './Slider';

import { isEmpty } from 'lodash';

export default function Layout({ data }) {
  const components = !isEmpty(data)
    ? data.map((item, index) => {
        switch (item.type) {
          case 'image-content':
            return <ImageContent data={item} key={index} />;
          case 'content':
            return <Content data={item} key={index} />;
          case 'slider':
            return <Slider data={item} key={index} />;
          default:
            return <></>;
        }
      })
    : [];
  return (
    <section className='global-layout bg-gradient-to-tr from-indigo-500 to-indigo-600 pb-20'>
      <div className='space-y-20'>{components}</div>
    </section>
  );
}