import React, { useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';

import gsap from 'gsap';
import { isNull } from 'lodash';

export default function PageModal() {
  const { modal, page } = useSelector((state) => state.app);
  const pageRef = useRef();

  useEffect(() => {
    if (modal && !isNull(pageRef)) {
      gsap.to(pageRef.current, { scale: 1, duration: 0.4 });
    } else if (!modal && !isNull(pageRef)) {
      gsap.to(pageRef.current, { scale: 0, duration: 0.4 });
    }
    console.log(page);
  }, [modal]);

  return (
    <section
      ref={pageRef}
      className='home-pageModal fixed inset-0 bg-white transform scale-0 rounded-20 m-8 z-30 cursor-dark'
    ></section>
  );
}
