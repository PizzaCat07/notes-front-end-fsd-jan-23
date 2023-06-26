import React from 'react'

export default function NoteItem({ noteText, noteColor, _id, deleteNote }) {
    return (
        <div className='note-item' style={{ 'background': noteColor }}>
            <div>{noteText}</div>
            <button>Mark Fav</button>
            <button onClick={() => deleteNote(_id)}>X</button>
        </div>
    )
}
