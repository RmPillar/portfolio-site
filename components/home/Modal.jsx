import React, { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../../store/actions/app';

import Image from 'next/image';
// import Cross from '../svg/Cross';

import ReactMarkdown from 'react-markdown';

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

  const projectData = data.projects[project];

  return (
    <section
      ref={modalRef}
      className='home-pageModal fixed inset-0 bg-white transform scale-0 rounded-20 xl:m-40 z-40 p-20 xl-max:overflow-y-scroll'
    >
      <button
        className='home-pageModal__button absolute top-0 left-0 rounded-full mt-20 ml-20 h-50 min-h-50 w-50 min-w-50 text-white bg-gradient-to-tr from-indigo-600 to-indigo-400 cursor-trigger'
        onClick={onClick}
      >
        {/* <Cross /> */}
      </button>

      {!isEmpty(projectData.title) && (
        <h2 className='heading text-center mb-20 xl-max:mt-60'>
          {projectData.title}
        </h2>
      )}
      <div className='xl:flex row h-full'>
        <div className='column xl:w-6/12 xl:ml-60'>
          <figure className='relative w-full pt-8/12 bg-gradient-to-tl from-indigo-600 to-indigo-400 rounded-20 overflow-hidden mb-20'>
            {!isEmpty(projectData.image) && (
              <Image
                src={projectData.image.src}
                alt={projectData.image.alt}
                layout='fill'
                className='object-cover absolute inset-0 h-full w-full object-left'
              />
            )}
          </figure>
          <div className='w-full xl-max:hidden'>
            <h4 className='heading-xs mb-10'>Tech Stack</h4>
            <div className='flex flex-wrap row h-4/12 w-8/12'>
              {projectData.stack.map((item, index) => (
                <p className='column block copy mb-10 w-6/12' key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className='column xl:w-6/12 xl:mr-60 rich-content flex flex-col items-center'>
          {!isEmpty(projectData.description) && (
            <ReactMarkdown>{projectData.description}</ReactMarkdown>
          )}
          <div className='w-full xl:hidden'>
            <h4 className='heading-xs mb-10'>Tech Stack</h4>
            <div className='flex flex-wrap row h-4/12 w-8/12'>
              {projectData.stack.map((item, index) => (
                <p className='column block tagline mb-10 w-6/12' key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className='md:flex flex-wrap w-full md-max:space-y-20'>
            {!isEmpty(projectData.url) && !isEmpty(projectData.title) && (
              <div className='md:w-4/12 xl:w-6/12'>
                <a
                  className='cursor-trigger'
                  target='_blank'
                  rel='noreferrer'
                  href={projectData.url}
                >
                  {projectData.title}
                </a>
              </div>
            )}
            {!isEmpty(projectData.api) && !isEmpty(projectData.title) && (
              <div className='md:w-4/12 xl:w-6/12'>
                <a
                  className='cursor-trigger'
                  target='_blank'
                  rel='noreferrer'
                  href={projectData.api}
                >
                  {projectData.title} API
                </a>
              </div>
            )}
            {!isEmpty(projectData.github) && !isEmpty(projectData.title) && (
              <div className='md:w-4/12 xl:w-6/12'>
                <a
                  className='cursor-trigger'
                  target='_blank'
                  rel='noreferrer'
                  href={projectData.github}
                >
                  {projectData.title} Github
                </a>
              </div>
            )}
            {!isEmpty(projectData.design) && !isEmpty(projectData.title) && (
              <div className='md:w-4/12 xl:w-6/12'>
                <a
                  className='cursor-trigger'
                  target='_blank'
                  rel='noreferrer'
                  href={projectData.design}
                >
                  {projectData.title} Design
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
