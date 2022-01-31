import React from 'react';
import AddContent from './AddContent';
import ColorContent from './ColorContent';

function Form() {
  return <div className='container '>
      <div className=' row justify-content-center'> 
      
       <form >
           <textarea className='text-area ' placeholder='Enter your notes'></textarea>
           <div className='container '>
               <div className='row'>
               <ColorContent/>
               <AddContent/>
               </div>
               </div> 
          

       </form>
         
      </div>
  
  </div> 
}

export default Form;
