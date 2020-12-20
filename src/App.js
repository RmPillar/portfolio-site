import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Cursor from './components/site/Cursor';
import Locomotive from './components/site/Locomotive';

function App() {
  return (
    <main className='App flex flex-col min-h-screen'>
      <Router>
        <Cursor />
        <Locomotive />
      </Router>
    </main>
  );
}

export default App;
