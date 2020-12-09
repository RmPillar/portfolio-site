import React from 'react';

import { useDispatch } from 'react-redux';
import { setScroll } from '../../store/actions/app';

export default function SectionIntro({ componentID, body }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setScroll('#second'));
  };
  return (
    <section
      id={componentID}
      className='global-sectionIntro'
      data-scroll-section
    >
      <div className='h-screen'>
        <div className='h-6/12 w-full flex flex-col justify-end'>
          {body && (
            <h1
              className='heading-2xl heading-2xl--outline text-indigo-600 uppercase text-center tracking-wide'
              data-scroll
              data-scroll-direction='horizontal'
              data-scroll-speed='1'
            >
              {body}
            </h1>
          )}
        </div>
        <button
          onClick={onClick}
          className='h-6/12 w-full cursor-arrow flex justify-center items-center'
        ></button>
      </div>
    </section>
  );
}
