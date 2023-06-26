import React, { useEffect } from 'react'
import { commonDeleteJson, commonGetJson } from '../../shared/utils/api-helpers'
import { removeNote, setNotes } from '../../data/notesSlice'
import NoteItem from './NoteItem'
import { useDispatch, useSelector } from 'react-redux'

export default function ListNote() {
    const { notes } = useSelector(state => state.notes)
    const dispatch = useDispatch()

    function deleteNote(_id) {
        if (window.confirm("Are you sure want to delete this note?")) {
            commonDeleteJson('/notes/' + _id)
                .then(x => {
                    if (x.status == false) {
                        alert(x.message)
                    } else {
                        alert("Deleted")
                        dispatch(removeNote(_id))
                    }
                })
        }
    }

    function getNotes() {
        commonGetJson('/notes')
            .then(x => {
                if (x.status == false) {
                    alert(x.message)
                } else {
                    dispatch(setNotes(x))
                }
            })
    }

    useEffect(() => {
        getNotes()
    }, [])

    return (
        <div>
            <h1>Your Notes</h1>
            <button onClick={getNotes}>Refresh</button>
            <hr />
            {
                notes.map(x =>
                    <NoteItem noteColor={x.noteColor} noteText={x.noteText} _id={x._id} deleteNote={deleteNote} />
                )
            }
        </div>
    )
}
