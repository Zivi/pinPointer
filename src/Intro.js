import React, { Component } from 'react';

class Intro extends Component {

  findLocation () {

    if (navigator.geolocation) {
      this.getLocation();
    }
    // Add error case for current location not shared
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.props.onCenter(pos);
    });
  }


  render () {
    return (
      <section className="Intro">
        <button onClick={this.findLocation.bind(this)}>Find the closest pinball to me!</button>
      </section>
    );
  }
}
export default Intro;
