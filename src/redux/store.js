import {configureStore} from '@reduxjs/toolkit';
import notesSlice from './notes/notes.Slice';

export const store=configureStore({
    reducer:{
        notes:notesSlice,
    }
})