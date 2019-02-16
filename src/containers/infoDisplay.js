import React, { Component } from 'react';
import Request from '../helpers/request.js'
import Pothole from '../components/pothole.js'
import PotholeList from '../components/potholeList.js';


// Here, InfoDisplay is the landing page
class InfoDisplay extends Component {

    constructor(props){
        super(props);
        this.state = {
            potholes: []
        }
    }

    componentDidMount(){
        let request = new Request()
        request.get('/api/potholes').then((data) => {
         this.setState({potholes: data._embedded.potholes})
        })
    }


    render() {
        return (
            // <p>I'm a container</p>
         <PotholeList potholes={this.state.potholes} />
        );
    }
}

export default InfoDisplay;