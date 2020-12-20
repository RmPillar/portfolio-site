import { SETSCROLL } from '../constants/types';

export const setScroll = (payload) => {
  return { type: SETSCROLL, payload };
};
