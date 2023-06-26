import React, { useEffect, useState } from 'react'
import { commonDeleteJson, commonGetJson } from '../../shared/utils/api-helpers'
import NoteItem from './NoteItem'

export default function ListNote() {
    const [notes, setNotes] = useState([])


    function deleteNote(_id) {
        if (window.confirm("Are you sure want to delete this note?")) {
            commonDeleteJson('/notes/' + _id)
                .then(x => {
                    if (x.status == false) {
                        alert(x.message)
                    } else {
                        alert("Deleted")
                        setNotes(notes.filter(x => x._id != _id))
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
                    setNotes(x)
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
