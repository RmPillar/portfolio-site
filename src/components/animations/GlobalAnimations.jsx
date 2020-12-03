import React, { useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';

export default function GlobalAnimations({ children }) {
  useEffect(() => {
    new SmoothScroll('a[href*="#"]', {
      speed: 1500,
      speedAsDuration: true,
      updateURL: true,
    });
  }, []);
  return <div>{children}</div>;
}
