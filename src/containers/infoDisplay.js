import React, { Component } from 'react';
import Request from '../helpers/request.js'
import Pothole from '../components/pothole.js'
import PotholeList from '../components/potholeList.js';
import PotholeForm from '../components/potholeForm.js'


// Here, InfoDisplay is the landing page
class InfoDisplay extends Component {

    constructor(props){
        super(props);
        this.state = {
            potholes: []
        }
        this.handlePotholePost = this.handlePotholePost.bind(this)
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
        <>    
            // <p>I'm a container</p>
         <PotholeList potholes={this.state.potholes} />
         <PotholeForm handlePotholePost={this.handlePotholePost} />
        </>
        );
    }
}

export default InfoDisplay;