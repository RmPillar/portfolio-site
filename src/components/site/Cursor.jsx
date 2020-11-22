import React, { useState, useEffect, useCallback, useRef } from 'react';
import gsap from 'gsap';
import classNames from 'classnames';
import { isEmpty } from 'lodash';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [hover, setHover] = useState(false);
  const [arrow, setArrow] = useState(false);

  const cursorRef = useRef(null);
  const arrowRef = useRef(null);

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const onMouseHover = () => {
    setHover(true);
  };
  const onMouseHoverOut = () => {
    setHover(false);
  };

  const onMouseArrow = () => {
    gsap
      .timeline()
      .to(arrowRef.current, {
        opacity: 1,
        scale: 1,
        ease: 'ease-in-out',
        duration: 0.3,
      })
      .to(
        cursorRef.current,
        {
          backgroundColor: 'transparent',
          ease: 'ease-in-out',
          duration: 0.3,
        },
        '-=1'
      )
      .play();
  };
  const onMouseArrowOut = () => {
    gsap
      .timeline()
      .to(arrowRef.current, {
        opacity: 0,
        scale: 0,
        ease: 'ease-in-out',
        duration: 0.3,
      })
      .to(
        cursorRef.current,
        {
          backgroundColor: 'black',
          ease: 'ease-in-out',
          duration: 0.3,
        },
        '-=1'
      )
      .play();
  };

  const addEventListeners = useCallback(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    Array.from(document.getElementsByClassName('cursor-trigger')).forEach(
      (el) => {
        el.addEventListener('mouseenter', onMouseHover);
        el.addEventListener('mouseleave', onMouseHoverOut);
      }
    );
    Array.from(
      document.getElementsByClassName('cursor-trigger--arrow')
    ).forEach((el) => {
      el.addEventListener('mouseenter', onMouseArrow);
      el.addEventListener('mouseleave', onMouseArrowOut);
    });
  }, []);

  const removeEventListeners = useCallback(() => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseenter', onMouseEnter);
    document.removeEventListener('mouseleave', onMouseLeave);
    Array.from(document.getElementsByClassName('cursor-trigger')).forEach(
      (el) => {
        el.removeEventListener('mouseenter', onMouseHover);
        el.removeEventListener('mouseleave', onMouseHoverOut);
      }
    );
    Array.from(
      document.getElementsByClassName('cursor-trigger--arrow')
    ).forEach((el) => {
      el.removeEventListener('mouseenter', onMouseArrow);
      el.removeEventListener('mouseleave', onMouseArrowOut);
    });
  }, []);

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, [addEventListeners, removeEventListeners]);

  return (
    <div
      className={classNames('site-cursor', {
        'site-cursor--hidden': hidden,
        'site-cursor--hover': hover,
        'site-cursor--arrow': arrow,
      })}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      ref={cursorRef}
    >
      <span
        ref={arrowRef}
        className='absolute block site-cursor__icon left-1/2 top-1/2'
      >
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
