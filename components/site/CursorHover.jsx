import React, { useRef, useEffect } from 'react';
import { useCursor } from '../../contexts/CursorContext';

import { isNull } from 'lodash';

function CursorHover({ dark = false, classes = '', children }) {
  const cursorRef = useRef();
  const { setHover, setDark } = useCursor();

  useEffect(() => {
    const handleMouseEnter = () => {
      setHover(true);
      if (dark) setDark(true);
    };
    const handleMouseLeave = () => {
      setHover(false);
      if (dark) setDark(false);
    };

    cursorRef.current.addEventListener('mouseenter', handleMouseEnter);
    cursorRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (!isNull(cursorRef.current)) {
        cursorRef.current.removeEventListener('mouseenter', handleMouseEnter);
        cursorRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [cursorRef]);

  return (
    <span ref={cursorRef} className={classes}>
      {children}
    </span>
  );
}

export default CursorHover;
