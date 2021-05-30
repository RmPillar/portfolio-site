import React from 'react';

import MainMenu from '../site/MainMenu';
import BtnScroll from '../buttons/BtnScroll';

export default function HomeMenu() {
  return (
    <MainMenu>
      <BtnScroll label='Robin Pillar' scrollTo='#home' />
      <BtnScroll label='Projects' scrollTo='#projects' />
      <BtnScroll label='Contact' scrollTo='#contact' />
    </MainMenu>
  );
}
