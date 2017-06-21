import React, { Component } from 'react';
export class Map extends React.Component {

  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }

    if (prevProps.center !== this.props.center) {
      this.map.setCenter(this.props.center);
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 14;
      const mapConfig = {
        zoom: zoom
      };
      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
    return (
      <div ref='map'>
        Loading map...
      </div>
    );
  }
}
