import React, { useState, useEffect } from 'react';

import SwiperCore, { Mousewheel, Controller, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { isEmpty, isNull } from 'lodash';

SwiperCore.use([Mousewheel, Controller, EffectFade]);

export default function Slider({ slides }) {
  const [controlledSwiperOne, setControlledSwiperOne] = useState(null);
  const [controlledSwiperTwo, setControlledSwiperTwo] = useState(null);
  const [slide, setSlide] = useState(0);

  const onSlideChange = (e) => {
    setSlide(e.activeIndex);
  };

  useEffect(() => {
    if (!isNull(controlledSwiperOne) && !isNull(controlledSwiperTwo)) {
      controlledSwiperOne.slideTo(slide);
      controlledSwiperTwo.slideTo(slide);
    }
  }, [slide, controlledSwiperOne, controlledSwiperOne]);

  return (
    <section className='global-slider'>
      {!isEmpty(slides) && (
        <div className='xl:flex row'>
          <div className='column xl:w-6/12'>
            <Swiper
              onSwiper={setControlledSwiperOne}
              controller={{ control: controlledSwiperTwo }}
              onSlideChange={onSlideChange}
              mousewheel={true}
              effect='fade'
            >
              {slides.forEach((slide) => (
                <SwiperSlide>
                  <figure className='pt-full h-full relative'>
                    <img
                      className='absolute inset-0 object-cover w-full h-full'
                      src={slide.image}
                    />
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='column xl:w-6/12 relative'>
            <Swiper
              id='controller'
              direction='vertical'
              mousewheel={true}
              onSwiper={setControlledSwiperTwo}
              controller={{ control: controlledSwiperOne }}
              onSlideChange={onSlideChange}
            >
              {slides.forEach((slide) => (
                <SwiperSlide className='relative'>
                  <div className='w-full flex items-center'>
                    <p className='whitespace-normal copy'>{slide.body}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
}
