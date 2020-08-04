import React from 'react';
import './App.css';
import Table from './tugas11/Table';
import Timer from './tugas12/Timer';

function App() {
  return (
    <div className="App">
      <Table />
      <Timer start={101}/>
    </div>
  );
}

export default App;
