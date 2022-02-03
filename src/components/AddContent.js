import React from 'react';

function AddContent({handleSubmit}) {
  return <div className='col-sm-8  row ' >
  <button className='btn btn-success rounded-pill  ml-auto ' onClick={handleSubmit} >ADD</button>
</div>
}

export default AddContent;
