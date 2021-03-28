import React, { useState, useEffect, useRef } from 'react';

import useResizeObserver from 'use-resize-observer';

import { useDispatch, useSelector } from 'react-redux';
import { setScroll } from '../../store/actions/app';

import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';

import { isNull } from 'lodash';

export default function Locomotive({ children }) {
  const { ref, width = 1, height = 1 } = useResizeObserver();
  const [locomotive, setLocomotive] = useState(null);
  const { scroll, modal } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const scrollRef = useRef();

  const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

  useEffect(() => {
    if (isNull(locomotive)) {
      const direction = window.matchMedia(`(min-width: 1025px)`).matches
        ? 'horizontal'
        : 'vertical';
      setLocomotive(
        new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          direction,
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
          if (classList.contains('home-card')) {
            const progress = element.progress;

            const translationVal =
              progress > 0.75 ? map(progress, 0.75, 1, 5, 200) : 0;

            const rotationVal =
              progress > 0.75 ? map(progress, 0.75, 1, 0, -60) : 0;

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
    if (!isNull(scroll) && !isNull(locomotive)) {
      const target = document.querySelector(scroll);
      locomotive.scrollTo(target, {
        offset: -100,
        easing: [0.16, 1, 0.3, 1],
        duration: 2000,
        callback: () => dispatch(setScroll(null)),
      });
    }
  }, [scroll, locomotive, dispatch]);

  useEffect(() => {
    if (!isNull(locomotive)) {
      if (modal) {
        locomotive.stop();
      } else locomotive.start();
    }
  }, [modal, locomotive]);

  useEffect(() => {
    console.log('hello');
    const direction = width >= 1025 ? 'horizontal' : 'vertical';
    setLocomotive(null);
    setLocomotive(
      new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        direction,
        multiplier: 0.6,
      })
    );
  }, [width]);

  return (
    <div ref={ref}>
      <div ref={scrollRef} data-scroll-container>
        {children}
      </div>
    </div>
  );
}
