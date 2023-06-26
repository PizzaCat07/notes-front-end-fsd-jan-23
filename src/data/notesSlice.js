const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: []
    },
    reducers: {
        removeNote: (state, action) => {
            const _id = action.payload;
            state.notes = state.notes.filter(x => x._id != _id)
        },
        setNotes: (state, action) => {
            state.notes = [...action.payload]
        }
    }
})

export const { removeNote, setNotes } = notesSlice.actions

export default notesSlice;