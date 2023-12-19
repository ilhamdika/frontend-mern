import logo from './logo.svg';
import './App.css';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='bg-blue-500'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 className='text-black'>test</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>test</Button>
      </header>
    </div>
  );
}

export default App;
