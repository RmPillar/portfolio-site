import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import locomotiveScroll from 'locomotive-scroll';

import Routes from './components/site/Routes';
import Header from './components/site/Header';
import MobileMenu from './components/site/MobileMenu';
import Footer from './components/site/Footer';
import Cursor from './components/site/Cursor';
import Overlay from './components/site/Overlay';

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
        <Overlay menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div ref={scrollRef}>
          <Routes />
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
