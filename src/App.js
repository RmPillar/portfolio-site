import React, { useEffect } from 'react';

import Cursor from './components/site/Cursor';
import locomotiveScroll from 'locomotive-scroll';

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
          <h1 data-scroll className='heading-xl'>
            Heading XL
          </h1>
        </div>

        <div data-scroll-section className='h-screen cursor-trigger'></div>
      </div>
    </div>
  );
}

export default App;
