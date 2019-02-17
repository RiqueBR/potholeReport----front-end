import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

export class MapComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeMarker: {},
            selectedPlace: {}
        }
    }
    
    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker
        })
    }
    
    render() {
      const style = {
        height: '75vh',
        width: '50vw'
      }

        return (
        // <div className="map-container">     
                <Map 
                // style={style} 
                google={this.props.google} 
                zoom={14} 
                initialCenter={{ lat: 39.648209, lng: -75.711185 }}>
                {/* <Marker onClick={this.onMarkerClick}></Marker> */}
                </Map>  
        // </div>    
        );
    }
}



export default GoogleApiWrapper({
    api: (process.env.AIzaSyBUukPjxf553UolDbw2vuevNzC2hlzSu7I)
})(MapComponent)
