import { isEmpty } from 'lodash';
import { SETSCROLL, OPENMODAL, CLOSEMODAL } from '../constants/types';

export const setScroll = (payload) => {
  return { type: SETSCROLL, payload };
};

export const setModal = (payload) => {
  if (!isEmpty(payload)) {
    return { type: OPENMODAL, payload };
  } else return { type: CLOSEMODAL };
};
