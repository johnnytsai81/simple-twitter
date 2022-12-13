import logo from './logo.svg';
import './App.css';
import './assets/all.scss'
import Example from './components/Example';
import Example2 from './components/Example2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="gap-8">
          <Example/>
          <Example2/>
        </div>
      </header>
    </div>
  );
}

export default App;
