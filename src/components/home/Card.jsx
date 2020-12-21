import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../store/actions/app';

export default function Card({ title, caption }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(toggleModal(true));
  };

  return (
    <div className='home-card cursor-trigger xl-max:column mb-4' data-scroll>
      <button
        onClick={onClick}
        className='block h-full w-full transform hover:scale-105 transition-transform duration-500 rounded-20 shadow-xl text-center'
      >
        <div className='h-7/12 w-full bg-gradient-to-tl from-teal-600 to-teal-400 rounded-t-20 cursor-dark relative'>
          <div className='absolute bottom-0 right-0 py-2 px-4 rounded-tl-20 bg-gradient-to-tr from-indigo-600 to-indigo-400'>
            <span className='copy text-gray-100'>{caption}</span>
          </div>
        </div>
        <div className='px-8 py-6 flex flex-col justify-center items-center h-5/12 bg-white rounded-b-20'>
          <h3 className='heading-xs whitespace-normal'>{title}</h3>
        </div>
      </button>
    </div>
  );
}
