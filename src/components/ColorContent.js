import React from 'react';
import {useDispatch} from 'react-redux'
import { changeColors } from '../redux/notes/notes.Slice';

function ColorContent() {
 const dispatch=useDispatch();
 

  return <div className='col-sm-4 '>
  <button className='  btn-color btn btn-danger rounded-circle ' onClick={()=>dispatch(changeColors('danger'))}> </button>
  <button className='  btn-color btn btn-success rounded-circle ' onClick={()=>dispatch(changeColors('success'))}> </button>
  <button className='  btn-color btn btn-primary rounded-circle ' onClick={()=>dispatch(changeColors('primary'))}> </button>
  <button className='  btn-color btn btn-warning rounded-circle ' onClick={()=>dispatch(changeColors('warning'))}> </button>
 </div>
}

export default ColorContent;
