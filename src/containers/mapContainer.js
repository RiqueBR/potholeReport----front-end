import React from "react";
import MapComponent from "../components/mapComponents/mapComponent.js";


class MapContainer extends React.Component {

	render() {
		return (
			<MapComponent
				// potholes={this.props.potholes}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBUukPjxf553UolDbw2vuevNzC2hlzSu7I&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}

export default MapContainer