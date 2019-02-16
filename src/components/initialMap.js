import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const InitialMap = withGoogleMap(props => {
    return (
        <GoogleMap 
        ref={props.onMapLoad} 
        defautZoom={14} 
        defaultCenter={{lat: 55.8642, lng: 4.2518}} 
        onCLick={props.onMapClick} style={{styleData}}> 
                {props.markers.map((marker, index) => 
                <Marker 
                key={index} >
                </Marker>
                )}
        </GoogleMap>
    );
});

export default InitialMap;

    //   const styleData = {
    //       width: '70%',
    //       height: '80vh'
    //   }