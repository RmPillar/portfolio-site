import React, { useState, useEffect, useRef } from 'react';

import Routes from './Routes';

import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { isNull } from 'lodash';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setScroll } from '../../store/actions/app';

export default function Locomotive() {
  const [locomotive, setLocomotive] = useState(null);
  const { scroll } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const scrollRef = useRef();
  const location = useLocation();

  const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

  useEffect(() => {
    if (isNull(locomotive)) {
      setLocomotive(
        new LocomotiveScroll({
          el: scrollRef.current,
          smooth: location.pathname === '/',
          direction: location.pathname === '/' ? 'horizontal' : 'vertical',
          multiplier: 0.5,
        })
      );
    }

    return () => {
      if (!isNull(locomotive)) {
        locomotive.destroy();
        setLocomotive(null);
      }
    };
  }, [locomotive, scrollRef, location.pathname]);

  useEffect(() => {
    if (
      !isNull(locomotive) &&
      window.matchMedia(`(min-width: 1025px)`).matches &&
      location.pathname === '/'
    ) {
      locomotive.on('scroll', (obj) => {
        const keys = Object.keys(obj.currentElements);
        keys.forEach((key, idx) => {
          const element = obj.currentElements[key];
          const classList = element.el.classList;
          if (classList.contains('home-pageCard')) {
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
  }, [locomotive, scrollRef, location.pathname]);

  useEffect(() => {
    if (!isNull(scroll) && !isNull(locomotive)) {
      const target = document.querySelector(scroll);
      locomotive.scrollTo(target, {
        offset: -100,
        easing: [0.16, 1, 0.3, 1],
        callback: () => dispatch(setScroll(null)),
      });
    }
  }, [scroll, locomotive, dispatch]);

  return (
    <div ref={scrollRef}>
      <Routes />
    </div>
  );
}
