import React, { useState, useEffect, useRef } from 'react';

import Home from '../../pages/Home';

import { useSelector } from 'react-redux';

import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { isNull } from 'lodash';

export default function Locomotive() {
  const [locomotive, setLocomotive] = useState(null);
  const { modal } = useSelector((state) => state.app);
  const scrollRef = useRef();

  const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

  useEffect(() => {
    if (isNull(locomotive)) {
      setLocomotive(
        new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          direction: 'horizontal',
          multiplier: 0.6,
        })
      );
    }

    return () => {
      if (!isNull(locomotive)) {
        locomotive.destroy();
        setLocomotive(null);
      }
    };
  }, [locomotive, scrollRef]);

  useEffect(() => {
    if (
      !isNull(locomotive) &&
      window.matchMedia(`(min-width: 1025px)`).matches
    ) {
      locomotive.on('scroll', (obj) => {
        const keys = Object.keys(obj.currentElements);
        keys.forEach((key, idx) => {
          const element = obj.currentElements[key];
          const classList = element.el.classList;
          if (classList.contains('home-pageCard')) {
            const progress = element.progress;

            const translationVal =
              progress > 0.7 ? map(progress, 0.7, 1, 5, 200) : 0;

            const rotationVal =
              progress > 0.7 ? map(progress, 0.7, 1, 0, -60) : 0;

            gsap.to(element.el, {
              y: `${translationVal}%`,
              rotate: rotationVal,
            });
          }
        });
      });
      locomotive.update();
    }
  }, [locomotive, scrollRef]);

  useEffect(() => {
    if (!isNull(locomotive) && modal) {
      locomotive.stop();
    } else if (!isNull(locomotive)) locomotive.start();
  }, [modal, locomotive]);

  return (
    <div ref={scrollRef}>
      <Home />
    </div>
  );
}
