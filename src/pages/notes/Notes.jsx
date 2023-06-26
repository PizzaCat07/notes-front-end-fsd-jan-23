import React from 'react'
import AddNote from './AddNote'
import ListNote from './ListNote'
import Header from '../../shared/components/Header'

export default function Notes() {
  return (
    <>
      <Header/>
      <div className='flex-two'>
        <div>
          <AddNote />
        </div>
        <div>
          <ListNote />
        </div>
      </div>
    </>
  )
}
