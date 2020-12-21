import React from 'react';

import Header from './components/site/Header';
import Cursor from './components/site/Cursor';
import Locomotive from './components/site/Locomotive';
import MobileMenu from './components/site/MobileMenu';

function App() {
  return (
    <main className='App flex flex-col min-h-screen'>
      <Cursor />
      <Header />
      <MobileMenu />
      <Locomotive />
    </main>
  );
}

export default App;
