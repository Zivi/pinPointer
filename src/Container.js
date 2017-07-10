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
    debugger;
    this.setState({
      activeMarker: marker,
      showInfoWindow: true,
    });
  }

  render() {
    const style = {
      width: '100px',
      height: '100px'
    };

    const { marker } = this.props;
    return (
      <div style={style}>
        <Map google={this.props.google} center={this.props.center}>
          {marker ?
            <Marker
              position={{ lat: marker.lat, lng: marker.lng}}
              name={marker.locationName}
              onClick={this.onMarkerClick.bind(this)}
            />
            /* Fix for issue in google maps react library where page won't load
            if child is undefined
            this be removed once this PR is merged: https://github.com/fullstackreact/google-maps-react/pull/66/files
            https://github.com/fullstackreact/google-maps-react/blob/master/src/index.js#L222 */
            : <div></div>
          }
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showInfoWindow}
          >
            <div>
              <h1>{marker && marker.locationName}</h1>
            </div>
          </InfoWindow>

        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAySflUQj6UpqI80XasJfiWc7ePzdY8BjQ'
})(Container);
