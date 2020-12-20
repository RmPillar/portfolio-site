import React, { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../store/actions/app';

import gsap from 'gsap';
import { isEmpty, isNull } from 'lodash';

import { ReactComponent as Cross } from '../../assets/svg/cross.svg';

import data from '../../assets/data';
import Layout from '../global/Layout';

export default function Modal() {
  const { modal, page } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const pageRef = useRef();

  useEffect(() => {
    if (modal && !isNull(pageRef)) {
      gsap.to(pageRef.current, { translateY: 0, duration: 0.3 });
      if (!window.matchMedia('(min-width:1025px)').matches)
        gsap.to(pageRef.current, {
          borderRadius: 0,
          duration: 0.3,
          delay: 0.3,
        });
    } else if (!modal && !isNull(pageRef)) {
      gsap.to(pageRef.current, { translateY: '100%', duration: 0.3 });
    }
  }, [modal]);

  const onClick = () => {
    dispatch(setModal(false));
  };

  return (
    <section
      ref={pageRef}
      className='home-pageModal fixed top-0 inset-x-0 h-screen bg-white transform translate-y-full rounded-t-20 xl:m-8 z-30 cursor-dark'
    >
      <div className='absolute top-0 left-0'>
        <button
          aria-label='Close Modal'
          className='rounded-full mt-4 ml-4 h-10 min-h-10 w-10 min-w-10 text-white bg-gradient-to-tr from-indigo-600 to-indigo-400 cursor-trigger'
          onClick={onClick}
        >
          <Cross />
        </button>
      </div>
      {!isEmpty(page) && (
        <div className='h-full overflow-y-scroll pt-4 pb-20'>
          {!isEmpty(data[page].heading) && (
            <h1 className='heading-xl text-center mb-8'>
              {data[page].heading}
            </h1>
          )}
          <Layout content={data[page].layout} />
        </div>
      )}
    </section>
  );
}
