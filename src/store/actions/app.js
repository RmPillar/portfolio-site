import { SETSCROLL, TOGGLEMENU } from '../constants/types';

export const setScroll = (payload) => {
  return { type: SETSCROLL, payload };
};

export const toggleMenu = (payload) => {
  return { type: TOGGLEMENU, payload };
};
