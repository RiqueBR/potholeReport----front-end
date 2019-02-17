import React from 'react';

const PotholeForm = (props) => {

   // Passing event as an argument to avoid using a global event
   function handleSubmit(event){
       event.preventDefault()
        
       const pothole = {
           'location': event.target.location.value,
           'diameter': event.target.diameter.value,
           'image': event.target.description.value
       }

       props.handlePotholePost(pothole)
   }

    return (
        <div className='form-container'>
            <form className='form-layout' onSubmit={handleSubmit}>
                <input className='input-field' type='text' placeholder='Location' name='location'/>
                <input className='input-field' type='text' placeholder='Diameter (meters)' name='diameter' />
                <textarea className='input-field' type='text' placeholder='Description' name='description'/>

                <button className='button-form' type='Submit'>Submit</button>
            </form>
        </div>
    );
};

export default PotholeForm;