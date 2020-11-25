import React, { useState, useEffect, useMemo, useCallback } from 'react';
import classNames from 'classnames';
import { initEvents, destroyEvents } from '../../utils/utils';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [arrow, setArrow] = useState(false);
  const [hover, setHover] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [prev, setPrev] = useState(null);

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  const onMouseOut = useCallback(() => {
    setHidden(true);
  }, []);
  const onMouseIn = useCallback(() => {
    setHidden(false);
  }, []);
  const onMouseHover = useCallback(() => {
    if (arrow) {
      setPrev('arrow');
    } else {
      setPrev(null);
    }

    setHover(true);
    setArrow(false);
  }, [arrow]);

  const onMouseHoverOut = useCallback(() => {
    setHover(false);
    if (prev === 'arrow') setArrow(true);
  }, [prev]);
  const onMouseArrow = useCallback(() => {
    setArrow(true);
  }, []);
  const onMouseArrowOut = useCallback(() => {
    setArrow(false);
  }, []);

  const events = useMemo(
    () => [
      { target: null, event: 'mousemove', callBack: onMouseMove },
      { target: null, event: 'mouseenter', callBack: onMouseIn },
      { target: null, event: 'mouseleave', callBack: onMouseOut },
      {
        target: document.getElementsByClassName('cursor-trigger'),
        event: 'mouseenter',
        callBack: onMouseHover,
      },
      {
        target: document.getElementsByClassName('cursor-trigger'),
        event: 'mouseleave',
        callBack: onMouseHoverOut,
      },
      {
        target: document.getElementsByClassName('cursor-trigger--arrow'),
        event: 'mouseenter',
        callBack: onMouseArrow,
      },
      {
        target: document.getElementsByClassName('cursor-trigger--arrow'),
        event: 'mouseleave',
        callBack: onMouseArrowOut,
      },
    ],
    [
      onMouseIn,
      onMouseHover,
      onMouseHoverOut,
      onMouseArrow,
      onMouseArrowOut,
      onMouseOut,
    ]
  );

  useEffect(() => {
    initEvents(events);
    return () => destroyEvents(events);
  }, [events]);

  return (
    <div
      className={classNames('site-cursor pointer-events-none xl-max:hidden', {
        'site-cursor--hidden': hidden,
        'site-cursor--hover': hover,
        'site-cursor--arrow': arrow,
      })}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <span className='block site-cursor__dot rounded-full pointer-events-none bg-gray-900 relative'></span>
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
