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
        <div className="item-list">
           {potholes}
        </div>
    );
};

export default PotholeList;