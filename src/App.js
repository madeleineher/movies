import React from 'react';
import './App.css';

// componenets
import Header from './components/layout/Header';
import CardElems from './components/card/CardElems';

// context
import CardState from './context/CardContext/CardState';

function App() {
  return (
    <CardState>
      <Header />
      <CardElems />
    </CardState>
  );
}

export default App;
