import React, { useState, useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setScroll } from '../../store/actions/app';

import LocomotiveScroll from 'locomotive-scroll';
import { isNull } from 'lodash';

export default function Locomotive({ children }) {
  const [locomotive, setLocomotive] = useState(null);
  const { scroll } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const scrollRef = useRef();

  useEffect(() => {
    if (isNull(locomotive)) {
      setLocomotive(
        new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
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

  return <div ref={scrollRef}>{children}</div>;
}
