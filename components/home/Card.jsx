import React, { useEffect, useRef } from 'react';

import Image from 'next/image';

import { useDispatch } from 'react-redux';
import { setProject, toggleModal } from '../../store/actions/app';

import { useLocomotive } from '../../contexts/LocomotiveContext';

import gsap from 'gsap';
import { isEmpty, isNull, isObject } from 'lodash';
import Link from 'next/link';

export default function Card({
  project: { title, caption, icon, slug },
  index,
}) {
  const dispatch = useDispatch();

  const cardRef = useRef();
  const locomotive = useLocomotive();
  const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

  useEffect(() => {
    if (
      !isNull(locomotive) &&
      window.matchMedia(`(min-width: 1025px)`).matches
    ) {
      locomotive.on('scroll', ({ currentElements }) => {
        if (isObject(currentElements[`card-${index}`])) {
          const progress = currentElements[`card-${index}`].progress;
          const translationVal =
            progress > 0.75 ? map(progress, 0.75, 1, 5, 200) : 0;

          const rotationVal =
            progress > 0.75 ? map(progress, 0.75, 1, 0, -60) : 0;

          gsap.to(currentElements[`card-${index}`].el, {
            y: `${translationVal}%`,
            rotate: rotationVal,
          });
        }
      });
      locomotive.update();
    }
  }, [locomotive, cardRef]);

  const onClick = () => {
    dispatch(toggleModal(true));
    dispatch(setProject(index));
  };

  return (
    <div
      className='home-card cursor-trigger xl-max:column mb-20'
      data-scroll
      data-scroll-id={`card-${index}`}
      ref={cardRef}
    >
      <Link href={`project/${slug}`}>
        <a className='block h-full w-full transform hover:scale-105 transition-transform duration-500 rounded-20 shadow-xl text-center'>
          <div className='xl-max:pt-7/12 xl:h-7/12 w-full bg-gradient-to-tl from-teal-600 to-teal-400 rounded-t-20 cursor-dark relative'>
            <figure className='relative w-full h-full p-40'>
              <div className='relative w-full h-full'>
                {!isEmpty(icon) && (
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    layout='fill'
                    className='object-contain absolute inset-0 w-full h-full'
                  />
                )}
              </div>
            </figure>

            <div className='absolute bottom-0 right-0 py-10 px-20 rounded-tl-20 bg-gradient-to-tr from-indigo-600 to-indigo-400'>
              <span className='copy text-gray-100'>{caption}</span>
            </div>
          </div>

          <div className='px-40 py-30 flex flex-col justify-center items-center h-5/12 bg-white rounded-b-20'>
            <h3 className='heading-xs whitespace-normal'>{title}</h3>
          </div>
        </a>
      </Link>
    </div>
  );
}
