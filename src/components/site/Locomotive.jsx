import React, { useState, useEffect, useRef } from 'react';

import Routes from './Routes';

import { useSelector, useDispatch } from 'react-redux';
import { setScroll } from '../../store/actions/app';

import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { isNull } from 'lodash';

export default function Locomotive() {
  const [locomotive, setLocomotive] = useState(null);
  const { scroll } = useSelector((state) => state.app);
  const dispatch = useDispatch();
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
    const duration = window.innerWidth > 1025 ? 1500 : 3000;
    if (!isNull(scroll)) {
      locomotive.scrollTo(scroll, {
        offset: -40,
        duration,
        easing: [0.83, 0, 0.17, 1],
        callback: () => dispatch(setScroll(null)),
      });
    }
  }, [dispatch, locomotive, scroll]);

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
              progress > 0.6 ? map(progress, 0.6, 1, 5, 200) : 0;

            const rotationVal =
              progress > 0.6 ? map(progress, 0.6, 1, 0, -60) : 0;

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

  return (
    <div ref={scrollRef}>
      <Routes />
    </div>
  );
}
