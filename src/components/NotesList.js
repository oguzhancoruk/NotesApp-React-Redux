import React from 'react';

import {useSelector} from 'react-redux';

function NotesList() {

const items=useSelector(state=>state.notes.items);
const search=useSelector(state=>state.notes.search);

console.log(search)

  return <div className='container mt-3 '>
  
      <div className=' row '>
        {  
        items.filter((val) => {
          if (search === '') return val;
          else if (val.tittle.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
          return false;
        }).map((item)=>( 
        <div className='col-sm-6 mt-3 '>
           <ul className="list-group   ">
             <li key={item.id} className= {"bg-"+item.color +" "+ "list-group-item "} >{item.tittle}</li>
            
           </ul>
           
         </div>
         )) 
         
         }
      </div>

      
       
       
   </div>

   

   
}

export default NotesList;
