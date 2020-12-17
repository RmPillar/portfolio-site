import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from 'react';

import classNames from 'classnames';
import gsap from 'gsap';

import { initEvents, destroyEvents } from '../../utils/utils';

export default function Cursor() {
  const [dark, setDark] = useState(false);
  const [hover, setHover] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [arrow, setArrow] = useState(false);

  const cursorRef = useRef();

  const onMouseOut = useCallback(() => {
    setHidden(true);
  }, []);
  const onMouseIn = useCallback(() => {
    setHidden(false);
  }, []);
  const onMouseDark = useCallback(() => {
    setDark(true);
  }, []);
  const onMouseDarkOut = useCallback(() => {
    setDark(false);
  }, []);
  const onMouseHover = useCallback(() => {
    setHover(true);
  }, []);
  const onMouseHoverOut = useCallback(() => {
    setHover(false);
  }, []);
  const onMouseArrowUp = useCallback(() => {
    setArrow(true);
  }, []);
  const onMouseArrowDown = useCallback(() => {
    setArrow(true);
  }, []);
  const onMouseArrowOut = useCallback(() => {
    setArrow(false);
  }, []);

  const events = useMemo(
    () => [
      {
        target: null,
        event: 'mousemove',
        callBack: (e) => {
          gsap.to(cursorRef.current, { y: e.clientY, x: e.clientX });
        },
      },
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
        target: document.getElementsByClassName('cursor-dark'),
        event: 'mouseenter',
        callBack: onMouseDark,
      },
      {
        target: document.getElementsByClassName('cursor-dark'),
        event: 'mouseleave',
        callBack: onMouseDarkOut,
      },
      {
        target: document.getElementsByClassName('cursor-arrowUp'),
        event: 'mouseenter',
        callBack: onMouseArrowUp,
      },
      {
        target: document.getElementsByClassName('cursor-arrowUp'),
        event: 'mouseleave',
        callBack: onMouseArrowOut,
      },
      {
        target: document.getElementsByClassName('cursor-arrowDown'),
        event: 'mouseenter',
        callBack: onMouseArrowDown,
      },
      {
        target: document.getElementsByClassName('cursor-arrowDown'),
        event: 'mouseleave',
        callBack: onMouseArrowOut,
      },
    ],
    [
      onMouseIn,
      onMouseHover,
      onMouseHoverOut,
      onMouseDark,
      onMouseDarkOut,
      onMouseOut,
      onMouseArrowUp,
      onMouseArrowDown,
      onMouseArrowOut,
    ]
  );

  useEffect(() => {
    initEvents(events);
    return () => destroyEvents(events);
  }, [events]);

  return (
    <div
      className={classNames(
        'site-cursor overflow-visible pointer-events-none xl-max:hidden',
        {
          'site-cursor--hidden': hidden,
          'site-cursor--dark': dark,
          'site-cursor--hover': hover,
          'site-cursor--arrowUp': arrow,
          // 'site-cursor--arrowDown': arrow,
        }
      )}
      ref={cursorRef}
    >
      <span className='site-cursor__dot rounded-full pointer-events-none border-2 border-white relative flex items-center justify-center transition-all duration-500 ease-in-out'>
        <span className='site-cursor__arrow'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </span>
      </span>
    </div>
  );
}
