import Cursor from './components/site/Cursor';

function App() {
  return (
    <div className='App'>
      <Cursor />
      <div className='h-screen'></div>
      <div className='h-screen bg-red-500 cursor-trigger--arrow'>
        <h1 className='heading-xl'>Heading XL</h1>
      </div>
      <div className='h-screen cursor-trigger'></div>
    </div>
  );
}

export default App;
