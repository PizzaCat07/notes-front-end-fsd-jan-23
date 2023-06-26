import React from 'react'
import AddNote from './AddNote'
import ListNote from './ListNote'

export default function Notes() {
  return (
    <div className='flex-two'>
      <div>
        <AddNote />
      </div>
      <div>
        <ListNote />
      </div>
    </div>
  )
}
