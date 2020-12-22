import {
  SETSCROLL,
  TOGGLEMENU,
  TOGGLEMODAL,
  SETPROJECT,
} from '../constants/types';

export const setScroll = (payload) => {
  return { type: SETSCROLL, payload };
};

export const toggleMenu = (payload) => {
  return { type: TOGGLEMENU, payload };
};

export const toggleModal = (payload) => {
  return { type: TOGGLEMODAL, payload };
};

export const setProject = (payload) => {
  return { type: SETPROJECT, payload };
};
