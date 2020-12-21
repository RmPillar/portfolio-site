import React, { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../../store/actions/app';

import { ReactComponent as Cross } from '../../assets/svg/cross.svg';

import gsap from 'gsap';
import { isNull } from 'lodash';

export default function PageModal() {
  const { modal } = useSelector((state) => state.app);
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
      gsap.to(modalRef.current, { scale: 0, duration: 0.3 });
    }
  }, [modal]);

  const onClick = () => {
    dispatch(toggleModal(false));
  };

  return (
    <section
      ref={modalRef}
      className='home-pageModal fixed inset-0 bg-white transform scale-0 rounded-20 xl:m-8 z-30 cursor-dark p-4 overflow-hidden'
    >
      <button
        className='home-pageModal__button absolute top-0 left-0 rounded-full mt-4 ml-4 h-10 min-h-10 w-10 min-w-10 text-white bg-gradient-to-tr from-indigo-600 to-indigo-400 cursor-trigger'
        onClick={onClick}
      >
        <Cross />
      </button>
    </section>
  );
}
