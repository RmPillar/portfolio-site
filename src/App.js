import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import locomotiveScroll from 'locomotive-scroll';
import classNames from 'classnames';

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

  return (
    <div className='App'>
      <Cursor />
      <Router>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} />

        <div
          className={classNames(
            'fixed inset-0 z-10 transition-opacity duration-500 bg-gray-900',
            { 'pointer-events-auto opacity-50': menuOpen },
            { 'pointer-events-none opacity-0': !menuOpen }
          )}
          onClick={() => setMenuOpen(false)}
        ></div>

        <div ref={scrollRef}>
          <Routes />
        </div>
      </Router>
    </div>
  );
}

export default App;
