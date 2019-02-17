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
        <div className="main-container">    
         <PotholeForm handlePotholePost={this.handlePotholePost} />
         <PotholeList potholes={this.state.potholes} />
         {/* <MapComponent /> */}
        </div>
        );
    }
}

export default InfoDisplay;