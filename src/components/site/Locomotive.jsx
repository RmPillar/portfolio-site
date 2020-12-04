import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setScroll } from '../../store/actions/app';

import LocomotiveScroll from 'locomotive-scroll';
import { isNull } from 'lodash';

export default function Locomotive({ children, scrollRef }) {
  const [locomotive, setLocomotive] = useState(null);
  const { scroll } = useSelector((state) => state.app);
  const dispatch = useDispatch();

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
    if (!isNull(scroll)) {
      locomotive.scrollTo(scroll, { offset: -40 });
      dispatch(setScroll(null));
    }
  }, [dispatch, locomotive, scroll]);

  return <div>{children}</div>;
}
