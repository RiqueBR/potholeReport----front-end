import React from 'react';

const Pothole = (props) => {
    
    
    const {location, diameter, description} = props.pothole;
    
    
    
    return (
        <div className="single-pothole">
            <p>Location: {location}</p>
            <p>Diameter: {diameter}</p>
            <p>Description: {description}</p>
        </div>
    );
};

export default Pothole;