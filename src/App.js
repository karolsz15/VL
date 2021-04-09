import Container from './Container/Container';
import LeftYoda from './Components/LeftYoda';
import RightYoda from './Components/RightYoda';
import Header from './Components/Header';

import React from 'react';

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/>
      <div style={{display:'flex'}}>
        <LeftYoda/>
        <Container/>
        <RightYoda/>
      </div>

    </div>
  );
}

export default App;
