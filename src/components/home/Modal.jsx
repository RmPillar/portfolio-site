import React, { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../../store/actions/app';

import Image from '../global/Image';
import { ReactComponent as Cross } from '../../assets/svg/cross.svg';

import gsap from 'gsap';
import { isEmpty, isNull } from 'lodash';

import data from '../../assets/data';

export default function PageModal() {
  const { modal, project } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const modalRef = useRef();

  useEffect(() => {
    if (modal && !isNull(modalRef)) {
      gsap.to(modalRef.current, { scale: 1, duration: 0.3 });
      if (!window.matchMedia('(min-width:1025px)').matches)
        gsap.to(modalRef.current, {
          borderRadius: 0,
          duration: 0.3,
          delay: 0.3,
        });
    } else if (!modal && !isNull(modalRef)) {
      gsap.to(modalRef.current, { scale: 0, duration: 0.3, borderRadius: 20 });
    }
  }, [modal]);

  const onClick = () => {
    dispatch(toggleModal(false));
  };

  return (
    <section
      ref={modalRef}
      className='home-pageModal fixed inset-0 bg-white transform scale-0 rounded-20 xl:m-8 z-40 p-4 xl-max:overflow-y-scroll'
    >
      <button
        className='home-pageModal__button absolute top-0 left-0 rounded-full mt-4 ml-4 h-10 min-h-10 w-10 min-w-10 text-white bg-gradient-to-tr from-indigo-600 to-indigo-400 cursor-trigger'
        onClick={onClick}
      >
        <Cross />
      </button>

      {!isEmpty(data.projects[project].title) && (
        <h2 className='heading text-center mb-4 xl-max:mt-12'>
          {data.projects[project].title}
        </h2>
      )}
      <div className='xl:flex row h-full'>
        <div className='column xl:w-6/12 xl:ml-12'>
          <figure className='relative w-full pt-8/12 bg-gradient-to-tl from-indigo-600 to-indigo-400 rounded-20 overflow-hidden mb-4'>
            {!isEmpty(data.projects[project].image) && (
              <Image
                src={data.projects[project].image.src}
                alt={data.projects[project].image.alt}
                classes='object-cover absolute inset-0 h-full w-full object-left'
              />
            )}
          </figure>
          <div className='w-full xl-max:hidden'>
            <h4 className='heading-xs mb-2'>Tech Stack</h4>
            <div className='flex flex-wrap row h-4/12 w-8/12'>
              {data.projects[project].stack.map((item, index) => (
                <p className='column block copy mb-2 w-6/12' key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className='column xl:w-6/12 xl:mr-12'>
          {!isEmpty(data.projects[project].description) && (
            <p className='copy whitespace-normal xl-max:mb-4'>
              {data.projects[project].description}
            </p>
          )}
          <div className='w-full xl:hidden'>
            <h4 className='heading-xs mb-2'>Tech Stack</h4>
            <div className='flex flex-wrap row h-4/12 w-8/12'>
              {data.projects[project].stack.map((item, index) => (
                <p className='column block tagline mb-2 w-6/12' key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
