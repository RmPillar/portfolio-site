import React from 'react';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../store/actions/app';

import MainMenu from '../site/MainMenu';

export default function ProjectMenu() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = (url) => {
    dispatch(toggleMenu());
    router.push(url);
  };

  return (
    <MainMenu>
      <a
        onClick={(e) => {
          e.preventDefault();
          handleClick('/');
        }}
        className='heading cursor-trigger'
      >
        Robin Pillar
      </a>
    </MainMenu>
  );
}
