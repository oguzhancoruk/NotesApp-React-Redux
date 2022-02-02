import React from 'react';

function AddContent({handleSubmit}) {
  return <div className='col-sm-8' >
  <button className='btn btn-success rounded-pill  ' onClick={handleSubmit} >ADD</button>
</div>
}

export default AddContent;
