import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/site/Header';
import MobileMenu from './components/site/MobileMenu';
import Cursor from './components/site/Cursor';
import Overlay from './components/site/Overlay';
import Locomotive from './components/site/Locomotive';
import Routes from './components/site/Routes';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className='App flex flex-col min-h-screen'>
      <Cursor />
      <Router>
        {/* <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
        <MobileMenu menuOpen={menuOpen} />

        <Overlay menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Locomotive />
      </Router>
    </main>
  );
}

export default App;
