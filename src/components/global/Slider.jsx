import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { isEmpty, isUndefined } from 'lodash';
import Image from './Image';

export default function Slider({ data: { heading, slides }, classes = '' }) {
  return (
    <section className='global-slider'>
      <div className='container'>
        {!isUndefined(heading) && (
          <h2 className='heading text-center mb-4 text-gray-100'>{heading}</h2>
        )}

        {!isEmpty(slides) && (
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            className='overflow-visible row'
          >
            {slides.map(({ url, alt, caption }, index) => (
              <SwiperSlide className='relative column' key={index}>
                <figure className='h-full'>
                  <div className='relative rounded-20 overflow-hidden pt-full  bg-gradient-to-tr from-indigo-600 to-indigo-400'>
                    {!isUndefined(url) && !isUndefined(alt) && (
                      <Image
                        src={url}
                        alt={alt}
                        classes='w-full object-cover absolute inset-0 h-full'
                      />
                    )}

                    <div className='absolute bottom-0 right-0 py-2 px-4 rounded-tl-20 bg-gradient-to-tr from-teal-600 to-teal-400'>
                      <span className='copy text-gray-100'>{caption}</span>
                    </div>
                  </div>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
