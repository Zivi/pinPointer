import React from 'react';
import { Map, GoogleApiWrapper } from  'google-maps-react';

class Container extends React.Component {
  render() {
    const style = {
      width: '500px',
      height: '100px'
    }
    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAySflUQj6UpqI80XasJfiWc7ePzdY8BjQ'
})(Container)
