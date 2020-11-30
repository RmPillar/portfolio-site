import React, { useState, useEffect, useMemo, useCallback } from 'react';
import classNames from 'classnames';
import { initEvents, destroyEvents } from '../../utils/utils';

import { useSpring, animated } from 'react-spring';

export default function Cursor() {
  const [arrow, setArrow] = useState(false);
  const [hover, setHover] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [prev, setPrev] = useState(null);

  const [props, set, stop] = useSpring(() => ({ top: 0, left: 0 }));

  const onMouseMove = (e) => {
    set({ top: e.clientY, left: e.clientX });
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
    <animated.div
      className={classNames('site-cursor pointer-events-none xl-max:hidden', {
        'site-cursor--hidden': hidden,
        'site-cursor--hover': hover,
        'site-cursor--arrow': arrow,
      })}
      style={props}
    >
      <span className='site-cursor__dot rounded-full pointer-events-none border-2 border-gray-900 relative flex items-center justify-center'></span>
      <span className='block site-cursor__arrow'>
        <svg
          viewBox='0 0 482.239 482.239'
          xmlns='http://www.w3.org/2000/svg'
          stroke='currentColor'
        >
          <path d='M206.812 34.446L0 241.119l206.743 206.674 24.353-24.284L65.929 258.342h416.31v-34.445H65.929L231.165 58.661z' />
        </svg>
      </span>
    </animated.div>
  );
}
