import React from 'react';
import WithoutHooks from './WithoutHooks'
import Hooks from './Hooks'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Uncomment to see one or the other in action */}
        <Hooks />
        {/* <WithoutHooks /> */}
      </header>
    </div>
  );
}

export default App;
