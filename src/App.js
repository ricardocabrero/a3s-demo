import React from 'react';
import './App.css';
import Header from './components/header'
import List from './components/list'

function App() {
  return (
    <div className="App">
      <Header
      title={'App List'}/>
      <List/>
    </div>
  );
}

export default App;
