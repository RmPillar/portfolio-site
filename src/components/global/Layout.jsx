import React from 'react';

import ImageContent from '../global/ImageContent';
import Content from '../global/Content';
import Slider from './Slider';

export default function Layout({ content }) {
  const components = content.map((item, index) => {
    switch (item.type) {
      case 'image-content':
        return <ImageContent data={item} key={index} />;
      case 'content':
        return <Content data={item} key={index} />;
      case 'slider':
        return <Slider data={item} key={index} />;

      default:
        break;
    }
  });
  return (
    <section className='global-layout'>
      <div className='space-y-20'>{components}</div>
    </section>
  );
}
