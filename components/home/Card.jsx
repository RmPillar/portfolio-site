import { isEmpty } from 'lodash';
import React from 'react';

import { useDispatch } from 'react-redux';
import { setProject, toggleModal } from '../../store/actions/app';

import Image from 'next/image';

export default function Card({ project: { title, caption, icon }, index }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(toggleModal(true));
    dispatch(setProject(index));
  };

  return (
    <div className='home-card cursor-trigger xl-max:column mb-20' data-scroll>
      <button
        onClick={onClick}
        className='block h-full w-full transform hover:scale-105 transition-transform duration-500 rounded-20 shadow-xl text-center'
      >
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
      </button>
    </div>
  );
}
