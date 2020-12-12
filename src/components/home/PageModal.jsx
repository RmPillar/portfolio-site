import React, { useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';

import About from '../../pages/About';
import Projects from '../../pages/Projects';
import Skills from '../../pages/Skills';
import Work from '../../pages/Work';

import gsap from 'gsap';
import { isNull } from 'lodash';

export default function PageModal() {
  const { modal, page } = useSelector((state) => state.app);
  const pageRef = useRef();

  useEffect(() => {
    if (modal && !isNull(pageRef)) {
      gsap.to(pageRef.current, { scale: 1, duration: 0.4 });
      if (!window.matchMedia('(min-width:1025px)').matches)
        gsap.to(pageRef.current, {
          borderRadius: 0,
          duration: 0.4,
          delay: 0.4,
        });
    } else if (!modal && !isNull(pageRef)) {
      gsap.to(pageRef.current, { scale: 0, duration: 0.4 });
    }
  }, [modal]);

  return (
    <section
      ref={pageRef}
      className='home-pageModal fixed inset-0 bg-white transform scale-0 rounded-20 xl:m-8 z-30 cursor-dark'
    >
      {page === '/about' && <About />}
      {page === '/projects' && <Projects />}
      {page === '/skills' && <Skills />}
      {page === '/work' && <Work />}
    </section>
  );
}
