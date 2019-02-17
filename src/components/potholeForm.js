import React from 'react';

const PotholeForm = (props) => {

   // Passing event as an argument to avoid using a global event
   function handleSubmit(event){
       event.preventDefault()
        
       const pothole = {
           'location': event.target.location.value,
           'diameter': event.target.diameter.value,
           'description': event.target.description.value
       }

       props.handlePotholePost(pothole)
   }

    return (
        <div className='form-container'>
            <form className='form-layout' onSubmit={handleSubmit}>
                <label>Location</label>
                <input className='input-field' type='text' name='location'/>
                <label>Diameter (cm)</label>
                <input className='input-field' type='text' name='diameter' />
                <label>Description</label>
                <input className='input-field' type='text' name='description'/>

                <button className='button-form' type='Submit'>Submit</button>
            </form>
        </div>
    );
};

export default PotholeForm;