import React from 'react';
import BtnScroll from '../buttons/BtnScroll';

import MainMenu from '../site/MainMenu';

export default function HomeMenu() {
  return (
    <MainMenu>
      <BtnScroll label='Robin Pillar' scrollTo='#home' />
      <BtnScroll label='Projects' scrollTo='#projects' />
      <BtnScroll label='Contact' scrollTo='#contact' />
    </MainMenu>
  );
}
