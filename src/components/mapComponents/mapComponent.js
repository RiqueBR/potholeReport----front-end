import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MapMarker from './mapMarker.js'

const MapComponent = withScriptjs(withGoogleMap((props) =>{

 
      const singleMarker = props.potholes.map( pothole => <MapMarker
                    key={pothole.id}
                    pothole={pothole}
                    address={{address: pothole.location}}
                  />);
        // for (let i in props.potholes) {
        // const data = props.potholes[i].location;
        // console.log(data);
        // }

        // let data = Object.keys(obj).forEach(key => {
        // console.log(obj[key]);
        // });
   
       
        let data = props.potholes.forEach(function(obj) {
            console.log(obj.location);
             });

            //  let newData = props.potholes.map((pothole, i) => {
            //     let objLocation = pothole[i].location;
            //  })
             
       
    

    let geocoder = new window.google.maps.Geocoder();
    geocoder.geocode( { 'address': 'Barker st'}, function(results, status) {
            if (status === 'OK') {
                console.log(results);
            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
            }
 });

 



                  
                  
  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat:  55.86515, lng: -4.25763 } }
        >
        {singleMarker}
      </GoogleMap>
    );
  }
))

export default MapComponent;

// Glasgow lat: 55.86515, lng: -4.25763;
