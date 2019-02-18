import React from "react";
import { Marker } from "react-google-maps";


class MapMarker extends React.Component {

  render(){
    return(
        <Marker
          position={this.props.location}
        >
        </Marker>
    );
  }
}

export default MapMarker;