import React from 'react';
import './App.css';
import Cards from './Cards';
import data from './data.json'

function App() {
  return (
    <div className="App">
      <img id="header" src="header.png" alt='header'/>
      <Cards jobs={data} />
    </div>
  );
}

export default App;
