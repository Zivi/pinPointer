import React, { Component } from 'react';
import ball from './ball.jpg';
import Intro from './Intro';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Pin Pointer</h1>
          <img src={ball} alt="shiny ball"/>
          <h2>Find pinball easily, anywhere</h2>
          <Intro />
      </div>
    );
  }
}

export default App;
