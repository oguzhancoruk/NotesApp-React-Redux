import React from 'react';

import {useSelector} from 'react-redux';

function NotesList() {

const items=useSelector(state=>state.notes.items);

console.log(items)

  return <div className='container mt-3 '>
      <div className=' row '>
        {  
        items.map((item)=>( 
        <div className='col-sm-6 mt-3 '>
           <ul className="list-group  ">
             <li key={item.id} className="list-group-item ">{item.tittle}</li>
           </ul>
         </div>
         )) }
      </div> 
   </div>;
}

export default NotesList;
