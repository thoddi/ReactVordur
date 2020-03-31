import React from 'react';
import './App.css';
import Header from './Header/Header';
import Card from './Card/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <h1>Barnatrygging</h1>
        <p>
          Barnatrygging Varðar tryggir börnin okkar fyrir hugsanlegum áföllum vegna slysa og veikinda sem geta haft varanlegar afleiðingar.
        </p>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
