import React from "react";
import { Marker } from "react-google-maps";


class MapMarker extends React.Component {
  constructor(props){
    super(props);
  }



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