import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './components/site/Routes';
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
      <div ref={scrollRef}>
        <Router>
          <Routes />
        </Router>
      </div>
    </div>
  );
}

export default App;
