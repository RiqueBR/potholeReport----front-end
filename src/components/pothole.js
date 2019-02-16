import React from 'react';

const Pothole = (props) => {
    
    
    const {location, diameter, image} = props.pothole;
    
    
    
    return (
        <div className="single-pothole">
            <p>Location: {location}</p>
            <p>Diameter: {diameter}</p>
            <p>Image: {image}</p>
        </div>
    );
};

export default Pothole;