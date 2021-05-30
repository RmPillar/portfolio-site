import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from 'react';

import { useRouter } from 'next/router';

import classNames from 'classnames';
import gsap from 'gsap';

import { initEvents, destroyEvents } from '../../utils';

export default function Cursor() {
  const [dark, setDark] = useState(false);
  const [hover, setHover] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [arrow, setArrow] = useState(false);

  const router = useRouter();

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
  const onMouseArrow = useCallback(() => {
    setArrow(true);
  }, []);
  const onMouseArrowOut = useCallback(() => {
    setArrow(false);
  }, []);

  const events = useMemo(() => {
    return [
      {
        target: null,
        event: 'mousemove',
        callBack: (e) => {
          gsap.to(cursorRef.current, {
            y: e.clientY,
            x: e.clientX,
            ease: 'power2',
          });
        },
      },
      { target: null, event: 'mouseenter', callBack: onMouseIn },
      { target: null, event: 'mouseleave', callBack: onMouseOut },
      {
        target: document.querySelectorAll('.cursor-trigger'),
        event: 'mouseenter',
        callBack: onMouseHover,
      },
      {
        target: document.querySelectorAll('.cursor-trigger'),
        event: 'mouseleave',
        callBack: onMouseHoverOut,
      },
      {
        target: document.querySelectorAll('.cursor-dark'),
        event: 'mouseenter',
        callBack: onMouseDark,
      },
      {
        target: document.querySelectorAll('.cursor-dark'),
        event: 'mouseleave',
        callBack: onMouseDarkOut,
      },
      {
        target: document.querySelectorAll('.cursor-arrow'),
        event: 'mouseenter',
        callBack: onMouseArrow,
      },
      {
        target: document.querySelectorAll('.cursor-arrow'),
        event: 'mouseleave',
        callBack: onMouseArrowOut,
      },
    ];
  }, [
    document,
    router.pathname,
    onMouseIn,
    onMouseHover,
    onMouseHoverOut,
    onMouseDark,
    onMouseDarkOut,
    onMouseOut,
    onMouseArrow,
    onMouseArrowOut,
  ]);

  useEffect(() => {
    initEvents(events);
    return () => destroyEvents(events);
  }, [events, router.pathname]);

  return (
    <div
      className={classNames(
        'site-cursor overflow-visible pointer-events-none xl-max:hidden',
        {
          'site-cursor--hidden': hidden,
          'site-cursor--dark': dark,
          'site-cursor--hover': hover,
          'site-cursor--arrow': arrow,
        }
      )}
      ref={cursorRef}
    >
      <span className='site-cursor__dot rounded-full pointer-events-none border-2 border-gray-900 relative flex items-center justify-center transform -translate-x-6/12 -translate-y-6/12 transition-all duration-500 ease-in-out'>
        <span className='site-cursor__arrow transition-all duration-500 ease-in-out'>
          <svg
            viewBox='0 0 482.239 482.239'
            xmlns='http://www.w3.org/2000/svg'
            className='pointer-events-none'
          >
            <path d='M206.812 34.446L0 241.119l206.743 206.674 24.353-24.284L65.929 258.342h416.31v-34.445H65.929L231.165 58.661z' />
          </svg>
        </span>
      </span>
    </div>
  );
}
