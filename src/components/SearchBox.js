import {useState } from 'react';
import {useDispatch} from 'react-redux';
import { filterTitle } from '../redux/notes/notes.Slice';


function SearchBox() {
  const [filter,setFilter]=useState("");
  const dispatch=useDispatch();

 const addSearch=()=>{
   dispatch(filterTitle(filter))
   setFilter('');
 }

 
 
  return <div className='search-box '>
      <input  type="text" placeholder='Search' value={filter} onChange={(e)=>setFilter(e.target.value)} />
      <button  className='btn btn-primary ml-3'    onClick={()=>addSearch()}>Ara</button>
     
  </div>;
}

export default SearchBox;
