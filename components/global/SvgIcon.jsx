import React from 'react';

import Cross from '../../assets/svg/cross.svg';
import ReactJS from '../../assets/svg/react.svg';
import Vue from '../../assets/svg/vue.svg';
import Next from '../../assets/svg/next.svg';
import Redux from '../../assets/svg/redux.svg';
import Node from '../../assets/svg/node.svg';
import Wordpress from '../../assets/svg/wordpress.svg';
import Figma from '../../assets/svg/figma.svg';

function SvgIcon({ icon, width, height }) {
  const ratio = Math.round((height / width) * 100, 2);

  return (
    <span className='inline-svg' style={{ paddingTop: `${ratio}%` }}>
      {icon === 'cross' && <Cross />}
      {icon === 'react' && <ReactJS />}
      {icon === 'vue' && <Vue />}
      {icon === 'next' && <Next />}
      {icon === 'redux' && <Redux />}
      {icon === 'node' && <Node />}
      {icon === 'wordpress' && <Wordpress />}
      {icon === 'figma' && <Figma />}
    </span>
  );
}

export default SvgIcon;
