import React, { useEffect, useRef } from 'react';

import { useLocomotive } from '../../contexts/LocomotiveContext';

import gsap from 'gsap';
import { isNull, isObject } from 'lodash';

function LocomotiveCard({ index, classes, children }) {
  const cardRef = useRef();
  const locomotive = useLocomotive();
  const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;
  useEffect(() => {
    if (
      !isNull(locomotive) &&
      window.matchMedia(`(min-width: 1025px)`).matches
    ) {
      locomotive.on('scroll', ({ currentElements }) => {
        if (isObject(currentElements[`card-${index}`])) {
          const progress = currentElements[`card-${index}`].progress;
          const translationVal =
            progress > 0.75 ? map(progress, 0.75, 1, 5, 200) : 0;

          const rotationVal =
            progress > 0.75 ? map(progress, 0.75, 1, 0, -60) : 0;

          gsap.to(currentElements[`card-${index}`].el, {
            y: `${translationVal}%`,
            rotate: rotationVal,
          });
        }
      });
      locomotive.update();
    }
  }, [locomotive, cardRef]);

  return (
    <div
      data-scroll
      data-scroll-id={`card-${index}`}
      ref={cardRef}
      className={classes}
    >
      {children}
    </div>
  );
}

export default LocomotiveCard;
