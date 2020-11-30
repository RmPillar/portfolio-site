import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import locomotiveScroll from 'locomotive-scroll';

import Routes from './components/site/Routes';
import Header from './components/site/Header';
import Cursor from './components/site/Cursor';

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
      <Router>
        <Header />
        <div ref={scrollRef}>
          <Routes />
        </div>
      </Router>
    </div>
  );
}

export default App;
