import { isEmpty } from 'lodash';
import { OPENMODAL, CLOSEMODAL } from '../constants/types';

export const setModal = (payload) => {
  if (!isEmpty(payload)) {
    return { type: OPENMODAL, payload };
  } else return { type: CLOSEMODAL };
};
