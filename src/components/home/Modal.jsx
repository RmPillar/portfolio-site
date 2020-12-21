import React from 'react';

import { useDispatch } from 'react-redux';

import { toggleModal } from '../../store/actions/app';

export default function Modal() {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(toggleModal(false));
  };
  return (
    <section className='home-modal w-screen h-screen fixed inset-0 flex items-center justify-center'>
      <div className='container z-30'>
        <div className='h-120 w-full bg-white rounded-20'></div>
      </div>
      <div
        className='absolute bg-black opacity-50 inset-0 z-10'
        onClick={onClick}
      ></div>
    </section>
  );
}
