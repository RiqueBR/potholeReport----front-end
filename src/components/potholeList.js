import React from 'react';
import Pothole from './pothole.js'

const PotholeList = (props) => {
    console.log(props.potholes);


    const potholes = props.potholes.map( pothole => {
       
        return (
            <li key={pothole.id} className="pothole-item">
                <Pothole pothole={pothole}/>
            </li>
        )
    })

    return (
        <div>
           <p>I'm a list of potholes</p>
           {potholes}
        </div>
    );
};

export default PotholeList;