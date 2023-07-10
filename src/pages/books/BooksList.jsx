import React, { useEffect, useState } from 'react'
import BookItem from './BookItem'
import { commonGetJson } from '../../shared/utils/api-helpers'

export default function BooksList() {

    const [booksList, setBookList] = useState([])

    useEffect(() => {
        commonGetJson('/books?page=1&itemsPerPage=3')
            .then(x => {
                setBookList(x)
            })
    }, [])

    return (    
        <>
            <h1>BooksList</h1>
            <hr />
            {
                booksList.map(x => <BookItem data={x} />)
            }
        </>
    )
}
