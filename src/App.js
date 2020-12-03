import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './components/site/Routes';
import Header from './components/site/Header';
import MobileMenu from './components/site/MobileMenu';
import Footer from './components/site/Footer';
import Cursor from './components/site/Cursor';
import Overlay from './components/site/Overlay';
import GlobalAnimation from './components/animations/GlobalAnimation';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='App flex flex-col min-h-screen'>
      <GlobalAnimation>
        <Cursor />
        <Router>
          <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} />
          <Overlay menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Routes />
          <Footer />
        </Router>
      </GlobalAnimation>
    </div>
  );
}

export default App;
