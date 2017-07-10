import React from 'react';
import { Map, Marker, GoogleApiWrapper } from  'google-maps-react';

class Container extends React.Component {
  render() {
    const style = {
      width: '100px',
      height: '100px'
    };

    const { marker } = this.props;

    return (
      <div style={style}>
        <Map google={this.props.google} center={this.props.center}>
          {marker &&
            <Marker
              position={{ lat: marker.lat, lng: marker.lng}}
              name={marker.locationName}
            />
          }
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAySflUQj6UpqI80XasJfiWc7ePzdY8BjQ'
})(Container);
