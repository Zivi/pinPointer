import React, { Component } from 'react';
import ball from './ball.jpg';
import Intro from './Intro';
import Container from  './Container';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      center: {
        lat: 37.774929,
        lng: -122.419146
      }
    };
  }
  recenter(pos) {
    this.setState({
      center: pos
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Pin Pointer</h1>
        <img src={ball} alt="shiny ball"/>
        <h2>Find pinball easily, anywhere</h2>
        <Intro onCenter={this.recenter.bind(this)} />
        <Container center={this.state.center}/>
      </div>
    );
  }
}

export default App;
