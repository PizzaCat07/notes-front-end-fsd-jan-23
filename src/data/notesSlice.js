import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: []
    },
    reducers: {
        addNote: (state, action) => {
            state.notes = [...state.notes, action.payload]
        },
        removeNote: (state, action) => {
            const _id = action.payload;
            state.notes = state.notes.filter(x => x._id != _id)
        },
        setNotes: (state, action) => {
            state.notes = [...action.payload]
        }
    }
})

export const { removeNote, setNotes, addNote } = notesSlice.actions

export default notesSlice;