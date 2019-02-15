import React, { Component } from 'react';
import Request from '../helpers/request.js'



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
         console.log(data._embedded);
        })
    }


    render() {
        return (
            <div>
                <h2>I'm a container</h2>
            </div>
        );
    }
}

export default InfoDisplay;