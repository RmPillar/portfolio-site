import React from 'react';

import { useRouter } from 'next/router';

import MainMenu from '../site/MainMenu';
import CursorHover from '../site/CursorHover';

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
      <CursorHover>
        <a
          onClick={(e) => {
            e.preventDefault();
            handleClick('/');
          }}
          className='heading-s'
        >
          Robin Pillar
        </a>
      </CursorHover>
      {data.map((project, index) => (
        <CursorHover>
          <a
            onClick={(e) => {
              e.preventDefault();
              handleClick(project.slug);
            }}
            className='heading-s'
            key={index}
          >
            {project.title}
          </a>
        </CursorHover>
      ))}
    </MainMenu>
  );
}
