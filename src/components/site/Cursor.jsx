import React, { useState, useEffect, useMemo, useCallback } from 'react';
import classNames from 'classnames';
import { initEvents, destroyEvents } from '../../utils/utils';
import { isNull } from 'lodash';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState(null);

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  const toggleMouseVisibility = useCallback(() => {
    if (isNull(cursor)) setCursor('hidden');
    else setCursor(null);
  }, [cursor]);
  const toggleMouseHover = useCallback(() => {
    if (isNull(cursor)) setCursor('hover');
    else setCursor(null);
  }, [cursor]);
  const toggleMouseArrow = useCallback(() => {
    if (isNull(cursor)) setCursor('arrow');
    else setCursor(null);
  }, [cursor]);

  const events = useMemo(
    () => [
      { target: null, event: 'mousemove', callBack: onMouseMove },
      { target: null, event: 'mouseenter', callBack: toggleMouseVisibility },
      { target: null, event: 'mouseleave', callBack: toggleMouseVisibility },
      {
        target: document.getElementsByClassName('cursor-trigger'),
        event: 'mouseenter',
        callBack: toggleMouseHover,
      },
      {
        target: document.getElementsByClassName('cursor-trigger'),
        event: 'mouseleave',
        callBack: toggleMouseHover,
      },
      {
        target: document.getElementsByClassName('cursor-trigger--arrow'),
        event: 'mouseenter',
        callBack: toggleMouseArrow,
      },
      {
        target: document.getElementsByClassName('cursor-trigger--arrow'),
        event: 'mouseleave',
        callBack: toggleMouseArrow,
      },
    ],
    [toggleMouseVisibility, toggleMouseHover, toggleMouseArrow]
  );

  useEffect(() => {
    initEvents(events);
    return () => destroyEvents(events);
  }, [events]);

  return (
    <div
      className={classNames('site-cursor pointer-events-none xl-max:hidden', {
        'site-cursor--hidden': cursor === 'hidden',
        'site-cursor--hover': cursor === 'hover',
        'site-cursor--arrow': cursor === 'arrow',
      })}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <span className='block site-cursor__dot rounded-full pointer-events-none bg-gray-900'></span>
      <span className='block site-cursor__arrow'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 14l-7 7m0 0l-7-7m7 7V3'
          />
        </svg>
      </span>
    </div>
  );
}
