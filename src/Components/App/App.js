import React from 'react';
// import logo from './logo.svg';
import Name from '../Names/Names'
import './App.css';
import NavBar from '../NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
       <p>The elements of ...</p>
       <Name></Name>
      </header>
    </div>
  );
}

export default App;
