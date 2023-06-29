import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commonDeleteJson, commonGetJson, commonPostJson } from "../shared/utils/api-helpers";

export const getAllNotes = createAsyncThunk('getAllNotes', async () => {
    return commonGetJson('/notes')
})

export const deleteNote = createAsyncThunk('deleteNote', async (data) => {
    return commonDeleteJson('/notes/' + data)
})

export const saveNote = createAsyncThunk('saveNote', async (data) => {
    return commonPostJson('/notes', data)
})


const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [],
        isNoteBeingSaved: false,
        areNotesBeingFetched: false,
        notesBeingDeleted: []
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
    },
    extraReducers: (builder) => {
        builder.addCase(saveNote.pending, (state, action) => {
            state.isNoteBeingSaved = true;
        })
        builder.addCase(saveNote.fulfilled, (state, action) => {
            state.isNoteBeingSaved = false;
            state.notes = [...action.payload]
        })
        builder.addCase(saveNote.rejected, (state, action) => {
            state.isNoteBeingSaved = false;
        })



        builder.addCase(getAllNotes.pending, (state, action) => {
            state.areNotesBeingFetched = true;
        })
        builder.addCase(getAllNotes.fulfilled, (state, action) => {
            state.areNotesBeingFetched = false;
            state.notes = [...action.payload]
        })
        builder.addCase(getAllNotes.rejected, (state, action) => {
            state.areNotesBeingFetched = false;
        })



        builder.addCase(deleteNote.pending, (state, action) => {
            let id = action.meta.arg
            state.notesBeingDeleted = [...state.notesBeingDeleted, id]
        })
        builder.addCase(deleteNote.fulfilled, (state, action) => {
            let id = action.meta.arg
            state.notesBeingDeleted = state.notesBeingDeleted.filter(x => x != id)
            state.notes = [...action.payload]
        })
        builder.addCase(deleteNote.rejected, (state, action) => {
            let id = action.meta.arg
            state.notesBeingDeleted = state.notesBeingDeleted.filter(x => x != id)
        })


    }
})

export const { removeNote, setNotes, addNote } = notesSlice.actions

export default notesSlice;