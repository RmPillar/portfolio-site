import React from 'react';

import { useDispatch } from 'react-redux';

import { setModal } from '../../store/actions/app';

export default function PageCard({ title, body, to }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setModal(to));
  };

  return (
    <div
      className='home-pageCard cursor-trigger xl-max:column mb-4'
      data-scroll
    >
      <button
        className='h-full w-full transform hover:scale-105 transition-transform duration-500 rounded-20 shadow-xl text-center'
        onClick={onClick}
      >
        <div className='h-7/12 w-full bg-gradient-to-tl from-teal-600 to-teal-400 rounded-t-20'></div>
        <div className='px-8 py-6 flex flex-col justify-center items-center h-5/12 bg-white rounded-b-20 cursor-dark'>
          <h1 className='heading-s'>{title}</h1>
          <p className='copy'>{body}</p>
        </div>
      </button>
    </div>
  );
}
