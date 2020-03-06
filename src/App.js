import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Tours from './components/Tours/Tours';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Tours />
    </React.Fragment>
  );
}

export default App;
