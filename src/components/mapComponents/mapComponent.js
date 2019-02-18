import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MapMarker from './mapMarker.js'

const MapComponent = withScriptjs(withGoogleMap((props) =>{

        // loop to obtain the list of objects and reassign the position
        for (let i in props.potholes) {
        var data = props.potholes[i];
        }

            // Geocoder services from Geocoder API -- Initialising and running a basic search
            let geocoder = new window.google.maps.Geocoder();
            geocoder.geocode( { 'address': data.location}, function(results, status) {
            if (status === 'OK') {
                var lat = results[0].geometry.location.lat();
                var lng = results[0].geometry.location.lng();
                //lat = location.lat(),
                //lng = location.lng(); 
                console.log(lat, lng);
                } else {
                console.log('Geocode was not successful for the following reason: ' + status);
                }
            });
       
            

      const singleMarker = props.potholes.map( pothole => <MapMarker
                    key={pothole.id}
                    pothole={pothole}
                    location={{lat: pothole.lat, lng: pothole.lng}} 
                  />);
              
                  
  return (
      <GoogleMap
        defaultZoom={14}
        center={{ lat:  55.86515, lng: -4.25763 }}
        >
        {singleMarker}
      </GoogleMap>
    );
  }
))

export default MapComponent;

// Glasgow lat: 55.86515, lng: -4.25763;
