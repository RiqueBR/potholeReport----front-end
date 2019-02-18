import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MapMarker from './mapMarker.js'

const MapComponent = withScriptjs(withGoogleMap((props) =>{

//   const singleMarker = props.markers.map( marker => <MapMarker
//                     key={marker.id}
//                     marker={marker}
//                     location={{lat: marker.lat, lng: marker.lon}}
//                   />);
                  
  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat:  55.86515, lng: -4.25763 } }
        >
        {/* {singleMarker} */}
      </GoogleMap>
    );
  }
))

export default MapComponent;

// Glasgow lat: 55.86515, lng: -4.25763;
