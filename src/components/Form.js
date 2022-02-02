import {useState} from 'react';
import {useDispatch} from 'react-redux'
import { addNotes } from '../redux/notes/notes.Slice';
import AddContent from './AddContent';
import ColorContent from './ColorContent';

function Form() {
  const [tittle,setTittle]=useState("")
  const dispatch=useDispatch();

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addNotes({id:'3',tittle}))
  }

  return <div className='container '>
      <div className=' row justify-content-center '> 
      
       <form >
           <textarea 
           className='text-area ' 
           placeholder='Enter your notes' 
           value={tittle} 
           onChange={(e)=>setTittle(e.target.value)} >

           </textarea>
           <div className='container '>
               <div className='row'>
               <ColorContent/>
               <AddContent handleSubmit={handleSubmit} />
               </div>
               </div> 
          

       </form>
         
      </div>
  
  </div> 
}

export default Form;
