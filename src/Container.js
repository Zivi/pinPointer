import React from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from  'google-maps-react';

class Container extends React.Component {

  constructor() {
    super();
    this.state = {
      activeMarker: null,
      showInfoWindow: false,
    };
  }


  onMarkerClick(props, marker) {
    this.setState({
      activeMarker: marker,
      showInfoWindow: true,
    });
  }

  render() {
    const { marker } = this.props;

    if (marker) {
      var listMachines  = marker.machines.map((machine) =>
        <li>{machine}</li>
      );
    }


    return (
      <div>
        <Map className='map-container'  google={this.props.google} center={this.props.center}>
          {marker ?
            <Marker
              position={{ lat: marker.lat, lng: marker.lng}}
              name={marker.locationName}
              onClick={this.onMarkerClick.bind(this)}
            />
            /* Fix for issue in google maps react library where page won't load
            if child is undefined
            this be removed once this change is published:
            https://github.com/fullstackreact/google-maps-react/pull/66/files
            https://github.com/fullstackreact/google-maps-react/blob/master/src/index.js#L222 */
            : <div></div>
          }
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showInfoWindow}
          >
            <div>
              <h4>{marker && marker.locationName}</h4>
              <ul>{marker && listMachines}</ul>
            </div>
          </InfoWindow>

        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAySflUQj6UpqI80XasJfiWc7ePzdY8BjQ',
  version: '3.'
})(Container);
