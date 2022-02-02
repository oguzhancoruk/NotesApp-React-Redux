import {createSlice} from '@reduxjs/toolkit';

export const notesSlice=createSlice({

    name:'notes',
    initialState:{
        items:[{
            id:"1",
            tittle:"ilk yazı"

        }],
        colors:[{
            color:"danger"
        },
        {
            color:"success"
        },
        {
            color:"primary"
        },
        {
            color:"warning"
        }

    ]

    },
    reducers:{
        addNotes:(state,action)=>{
            state.items.push(action.payload)
        }
    }
})

export const {addNotes}=notesSlice.actions;
export default notesSlice.reducer;