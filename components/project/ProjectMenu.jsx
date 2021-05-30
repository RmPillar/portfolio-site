import React from 'react';

import { useRouter } from 'next/router';

import MainMenu from '../site/MainMenu';

import { useMenu } from '../../contexts/MenuContext';

export default function ProjectMenu({ data }) {
  const router = useRouter();
  const { setMenuOpen } = useMenu();

  const handleClick = (url) => {
    setMenuOpen(false);
    router.push(url);
  };

  return (
    <MainMenu>
      <a
        onClick={(e) => {
          e.preventDefault();
          handleClick('/');
        }}
        className='heading-s cursor-trigger'
      >
        Robin Pillar
      </a>
      {data.map((project, index) => (
        <a
          onClick={(e) => {
            e.preventDefault();
            handleClick(project.slug);
          }}
          className='heading-s cursor-trigger'
          key={index}
        >
          {project.title}
        </a>
      ))}
    </MainMenu>
  );
}
