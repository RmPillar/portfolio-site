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
    ],
    [
      onMouseIn,
      onMouseHover,
      onMouseHoverOut,
      onMouseDark,
      onMouseDarkOut,
      onMouseOut,
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
        }
      )}
      ref={cursorRef}
    >
      <span className='site-cursor__dot rounded-full pointer-events-none border-2 border-white relative flex items-center justify-center transition-all duration-500 ease-in-out'></span>
    </div>
  );
}
