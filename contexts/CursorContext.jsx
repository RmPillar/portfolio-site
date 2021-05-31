import React, { createContext, useState, useRef, useEffect } from 'react';

import gsap from 'gsap';
import classNames from 'classnames';
import { isNull } from 'lodash';

export const CursorContext = createContext({
  setHover: () => {},
  setDark: () => {},
  setHidden: () => {},
});

export const CursorProvider = ({ children }) => {
  const [hover, setHover] = useState(false);
  const [dark, setDark] = useState(false);
  const [hidden, setHidden] = useState(true);
  const cursorRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        y: e.clientY,
        x: e.clientX,
        ease: 'power2',
      });
    };
    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (!isNull(document)) {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseenter', handleMouseEnter);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [cursorRef]);

  return (
    <CursorContext.Provider value={{ setHover, setDark, setHidden }}>
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
        <span className='site-cursor__dot rounded-full pointer-events-none border-2 border-gray-900 relative flex items-center justify-center transform -translate-x-6/12 -translate-y-6/12 transition-all duration-500 ease-in-out'></span>
      </div>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const cursor = React.useContext(CursorContext);
  if (cursor === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return cursor;
};
