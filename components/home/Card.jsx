import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import LocomotiveCard from './LocomotiveCard';
import CursorHover from '../site/CursorHover';

import { isEmpty } from 'lodash';

export default function Card({
  project: { title, caption, icon, slug },
  index,
}) {
  return (
    <LocomotiveCard index={index} classes='home-card xl-max:column mb-20'>
      <Link href={`project/${slug}`}>
        <a className='block h-full w-full transform hover:scale-105 transition-transform duration-500 rounded-20 shadow-xl text-center'>
          <CursorHover dark={true}>
            <div className='xl-max:pt-7/12 xl:h-7/12 w-full bg-gradient-to-tl from-teal-600 to-teal-400 rounded-t-20 relative'>
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
          </CursorHover>

          <CursorHover>
            <div className='px-40 py-30 flex flex-col justify-center items-center h-5/12 bg-white rounded-b-20'>
              <h3 className='heading-xs whitespace-normal'>{title}</h3>
            </div>
          </CursorHover>
        </a>
      </Link>
    </LocomotiveCard>
  );
}
