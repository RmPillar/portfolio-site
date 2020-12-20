import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { isEmpty } from 'lodash';
import Image from './Image';

export default function Slider({ data: { slides }, classes = '' }) {
  return (
    <section className='global-slider'>
      {!isEmpty(slides) && (
        <div>
          <Swiper spaceBetween={20} slidesPerView={3}>
            {slides.map(({ url, alt }, index) => (
              <SwiperSlide className='relative flex row' key={index}>
                <figure className='column h-full'>
                  <Image src={url} alt={alt} classes='w-full' />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
}
