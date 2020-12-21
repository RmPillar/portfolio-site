import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, toggleModal } from '../store/actions/app';

import Intro from '../components/home/Intro';
import List from '../components/home/List';
import Contact from '../components/home/Contact';
import Modal from '../components/home/Modal';

import classNames from 'classnames';

export default function Home() {
  const { modal, menuOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(toggleModal(false));
    dispatch(toggleMenu(false));
  };

  return (
    <section
      className='flex xl-max:flex-col h-screen relative justify-start'
      data-scroll-container
    >
      <Intro />
      <List />
      <Contact />
      <Modal />
      <div
        onClick={onClick}
        className={classNames(
          'fixed inset-0 w-screen h-screen bg-black transition-opacity duration-500',
          {
            'opacity-50 pointer-events-auto': modal || menuOpen,
            'opacity-0 pointer-events-none': !modal || !menuOpen,
          }
        )}
      ></div>
    </section>
  );
}
