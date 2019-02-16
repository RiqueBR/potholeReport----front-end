import React, { Component } from 'react';
import Request from '../helpers/request.js'
import PotholeList from '../components/potholeList.js';
import PotholeForm from '../components/potholeForm.js'
import MapComponent from '../components/mapComponent.js'


// Here, InfoDisplay is the landing page
class InfoDisplay extends Component {

    constructor(props){
        super(props);
        this.state = {
            potholes: [],
            geoData: []
        }
        this.handlePotholePost = this.handlePotholePost.bind(this)
        // this.handleDelete = this.handleDelete.bind(this)
    }



    // geocoder = new google.maps.geocoder();

    // getGeoData(){

    // } 

//   getData(latlng){
//     let lat = latlng.lat
//     let lng = latlng.lng
//     fetch(`https://api.darksky.net/forecast/9ba968aba945b3577b3c75bb674dcfbd/${lat},${lng}`)
//     .then(res => res.json())
//     .then(data => this.setState({data: data.daily.data}))
//   }

    componentDidMount(){
        let request = new Request()
        request.get('/api/potholes').then((data) => {
         this.setState({potholes: data._embedded.potholes})
        })
    }

    handlePotholePost(pothole){
        const request = new Request();
        request.post('/api/potholes', pothole).then(() => {
            window.location.href = '/potholes'
        })
    }



    render() {
        return (
        <>    
            // <p>I'm a container</p>
         <PotholeList potholes={this.state.potholes} />
         <PotholeForm handlePotholePost={this.handlePotholePost} />
         <MapComponent />
        </>
        );
    }
}

export default InfoDisplay;