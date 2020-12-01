import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import locomotiveScroll from 'locomotive-scroll';

import Routes from './components/site/Routes';
import Header from './components/site/Header';
import MobileMenu from './components/site/MobileMenu';
import Cursor from './components/site/Cursor';

function App() {
  const scrollRef = React.createRef();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  });

  console.log(menuOpen);

  return (
    <div className='App'>
      <Cursor />
      <Router>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} />
        <div ref={scrollRef}>
          <Routes />
        </div>
      </Router>
    </div>
  );
}

export default App;
