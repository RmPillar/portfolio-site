import React, { useEffect } from 'react';

import Cursor from './components/site/Cursor';
import locomotiveScroll from 'locomotive-scroll';
import BtnBlock from './components/global/BtnBlock';

function App() {
  const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  });

  return (
    <div className='App'>
      <Cursor />
      <div data-scroll-container className='scroll' ref={scrollRef}>
        <div data-scroll-section className='h-screen'></div>

        <div
          data-scroll-section
          className='h-screen bg-red-500 cursor-trigger--arrow'
        >
          <div className='container pt-20'>
            <BtnBlock
              data-scroll
              data-scroll-speed='3'
              data-scroll-position='bottom'
              label='This is a button'
              url='/'
            />
          </div>
        </div>

        <div data-scroll-section className='h-screen cursor-trigger'></div>
      </div>
    </div>
  );
}

export default App;
