import React, { Component } from 'react';

class Intro extends Component {

  findLocation () {

    if (navigator.geolocation) {
      this.getLocation();
    }
    // Add error case for current location not shared
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      let pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log('position: ', position);
      console.log('pos: ', pos);
    });
  }

  render () {
    return (
      <section className="Intro">
        <h3>Welcome</h3>
        <button onClick={this.findLocation.bind(this)}>Show pinball locations near me!</button>
      </section>
    );
  }
}
export default Intro;
