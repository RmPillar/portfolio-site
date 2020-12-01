import React, { useState, useEffect } from 'react';

import classNames from 'classnames';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

export default function BtnMenu({ active, setActive }) {
  const [app, setApp] = useState();

  useEffect(() => {
    setApp(document.querySelector('.App'));
    return () => {
      clearAllBodyScrollLocks(app);
    };
  }, [app, setApp]);

  const onClick = () => {
    setActive((prev) => {
      if (!prev) disableBodyScroll(app);
      else enableBodyScroll(app);
      return !prev;
    });
  };
  return (
    <div className='btn--menu__wrapper z-30'>
      <button
        className={classNames('btn btn--menu xl:hidden', { active })}
        onClick={onClick}
      >
        <span className='btn--menu__inner'></span>
      </button>
    </div>
  );
}
