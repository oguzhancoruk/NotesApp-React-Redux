import {useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { nanoid } from '@reduxjs/toolkit';
import { addNotes } from '../redux/notes/notes.Slice';
import AddContent from './AddContent';
import ColorContent from './ColorContent';
import SearchBox from './SearchBox';

function Form() {
  const [tittle,setTittle]=useState("")
  const dispatch=useDispatch();
  const colors=useSelector(state=>state.notes.activeColor)
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addNotes({id:nanoid(),tittle,color:colors}))
  }

  const formSubmit =(e)=>{
    e.preventDefault();
  }

  return <>
  
  <SearchBox/>
  
  
  <div className='container '>
      <div className=' row justify-content-center '> 
      
       <form onSubmit={formSubmit} >
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
  </>
}

export default Form;
