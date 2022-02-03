import {createSlice} from '@reduxjs/toolkit';

export const notesSlice=createSlice({

    name:'notes',
    initialState:{
        items:[],
       activeColor:'white',
       search:'',

    },
    reducers:{
        addNotes:(state,action)=>{
            state.items.push(action.payload)
        },
        changeColors:(state,action)=>{
            state.activeColor=action.payload;
        },
        filterTitle:(state,action)=>{
            state.search=action.payload;
        }
    }
})

export const {addNotes,changeColors, filterTitle}=notesSlice.actions;
export default notesSlice.reducer;