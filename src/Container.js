import React from 'react';
import { Map, GoogleApiWrapper } from  'google-maps-react';

class Container extends React.Component {
  render() {
    const style = {
      width: '100px',
      height: '100px'
    }
    return (
      <div style={style}>
        <Map google={this.props.google} center={this.props.center} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAySflUQj6UpqI80XasJfiWc7ePzdY8BjQ'
})(Container)
