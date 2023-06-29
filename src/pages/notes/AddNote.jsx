import React, { useState } from 'react'
import { commonPostJson } from '../../shared/utils/api-helpers'
import { useDispatch } from 'react-redux';
import { setNotes } from '../../data/notesSlice';
import Spinner from '../../shared/components/Spinner';
import Loader from '../../shared/components/Loader';

export default function AddNote() {
    const [noteText, setNoteText] = useState('')
    const [noteColor, setNoteColor] = useState('white');
    const [isNoteBeingLoaded, setIsNoteBeingLoaded] = useState(false)

    const dispatch = useDispatch()

    function saveNote() {
        let noteObj = {
            noteText,
            noteColor
        }
        setIsNoteBeingLoaded(true)


        commonPostJson('/notes', noteObj)
            .then(x => {
                setIsNoteBeingLoaded(false)

                if (x.status == false) {
                    alert(x.message)
                } else {
                    alert('Note created');
                    dispatch(setNotes(x))
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
            {
                isNoteBeingLoaded
                    ? <Spinner />
                    : <button onClick={saveNote}>Save</button>

            }

        </div>
    )
}
