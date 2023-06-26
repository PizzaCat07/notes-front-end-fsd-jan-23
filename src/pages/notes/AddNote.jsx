import React, { useState } from 'react'
import { commonPostJson } from '../../shared/utils/api-helpers'

export default function AddNote() {
    const [noteText, setNoteText] = useState('')
    const [noteColor, setNoteColor] = useState('white')

    function saveNote() {
        let noteObj = {
            noteText,
            noteColor
        }

        commonPostJson('/notes', noteObj)
            .then(x => {
                if (x.status == false) {
                    alert(x.message)
                } else {                    
                    alert('Note created')
                }
            })
    }

    return (
        <div>
            <h1>Add a new Note</h1>
            <hr />
            <textarea value={noteText} onChange={e => setNoteText(e.target.value)}></textarea>
            <br />
            <br />
            <input type='color' value={noteColor} onChange={e => setNoteColor(e.target.value)} />
            <br />
            <br />
            <button onClick={saveNote}>Save</button>
        </div>
    )
}
