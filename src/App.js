import React, { useState, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/site/Header';
import MobileMenu from './components/site/MobileMenu';
import Page from './components/site/Page';
import Footer from './components/site/Footer';
import Cursor from './components/site/Cursor';
import Overlay from './components/site/Overlay';
import Locomotive from './components/site/Locomotive';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollRef = useRef();

  return (
    <Locomotive scrollRef={scrollRef}>
      <div
        className='App flex flex-col min-h-screen bg-gray-200'
        ref={scrollRef}
        data-scroll-container
      >
        <Cursor />
        <Router>
          <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} />
          <Overlay menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Page />
          <Footer />
        </Router>
      </div>
    </Locomotive>
  );
}

export default App;
