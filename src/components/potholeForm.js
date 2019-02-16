import React from 'react';

const PotholeForm = (props) => {

   // Passing event as an argument to avoid using a global event
   function handleSubmit(event){
       event.preventDefault()
        
       const pothole = {
           'location': event.target.location.value,
           'diameter': event.target.diameter.value,
           'image': event.target.image.value
       }

       props.handlePotholePost(pothole)
   }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Location' name='location'/>
            <input type='text' placeholder='Area' name='diameter' />
            <input type='text' placeholder='Image' name='image'/>

            <button type='Submit'>Submit</button>
        </form>
    );
};

export default PotholeForm;