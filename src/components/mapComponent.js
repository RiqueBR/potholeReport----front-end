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
          width: '70%',
          height: '80vh'
      }

        return (
        <>    
         <Map 
            style={style} 
            google={this.props.google} 
            zoom={14} 
            initialCenter={{ lat: 39.648209, lng: -75.711185 }} />
            <Marker onClick={this.onMarkerClick}/>
        </>    
        );
    }
}



export default GoogleApiWrapper({
    api: (process.env.AIzaSyBUukPjxf553UolDbw2vuevNzC2hlzSu7I)
})(MapComponent)
