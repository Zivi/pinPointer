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

    this.fetchPinball(pos);
  }

  fetchPinball(pos) {
    fetch(`https://www.pinballmap.com/api/v1/locations/closest_by_lat_lon.json?lat=${pos.lat}&lon=${pos.lng}&max_distance=60&send_all_within_distance =true`)
      .then(response => response.json())
      .then(res => {
        this.setState({
          pinballSpot: {
            lat: +res.location.lat,
            lng: +res.location.lon,
            locationName: res.location.name,
          }
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Pin Pointer</h1>
        <img src={ball} alt="shiny ball"/>
        <h2>Find pinball easily, anywhere</h2>
        <Intro onCenter={this.recenter.bind(this)} />
        <Container center={this.state.center} marker={this.state.pinballSpot}/>
      </div>
    );
  }
}

export default App;
