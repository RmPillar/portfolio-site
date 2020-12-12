import React from 'react';

import Cursor from './components/site/Cursor';
import Locomotive from './components/site/Locomotive';

function App() {
  return (
    <main className='App flex flex-col min-h-screen'>
      <Cursor />
      <Locomotive />
    </main>
  );
}

export default App;
