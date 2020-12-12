import React, { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../store/actions/app';

import gsap from 'gsap';
import { isNull } from 'lodash';

import Intro from '../components/home/Intro';
import PageList from '../components/home/PageList';
import PageModal from '../components/home/PageModal';
import Contact from '../components/home/Contact';

export default function Home() {
  const { modal } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const overlayRef = useRef();

  const onClick = () => {
    dispatch(setModal());
  };

  useEffect(() => {
    if (modal && !isNull(overlayRef)) {
      gsap.to(overlayRef.current, {
        opacity: 0.5,
        pointerEvents: 'auto',
        duration: 0.4,
      });
    } else if (!modal && !isNull(overlayRef)) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.4,
      });
    }
  }, [modal]);

  return (
    <section
      className='flex xl-max:flex-col h-screen relative justify-start'
      data-scroll-container
    >
      <Intro />
      <PageList />
      <Contact />

      <PageModal />

      <div
        ref={overlayRef}
        onClick={onClick}
        className='w-screen h-screen bg-gray-900 fixed inset-0 opacity-0 pointer-events-none'
      ></div>
    </section>
  );
}
