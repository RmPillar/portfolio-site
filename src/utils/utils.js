import { isNull } from 'lodash';

export const initEvents = (events) => {
  events.forEach((e) => {
    if (isNull(e.target)) {
      document.addEventListener(e.event, e.callBack);
    } else {
      Array.from(e.target).forEach((el) => {
        el.addEventListener(e.event, e.callBack);
      });
    }
  });
};

export const destroyEvents = (events) => {
  events.forEach((e) => {
    if (isNull(e.target)) {
      document.removeEventListener(e.event, e.callBack);
    } else {
      Array.from(e.target).forEach((el) => {
        el.removeEventListener(e.event, e.callBack);
      });
    }
  });
};
