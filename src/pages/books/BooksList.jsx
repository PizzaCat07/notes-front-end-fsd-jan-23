import React, { useEffect, useState } from 'react'
import BookItem from './BookItem'
import { commonGetJson } from '../../shared/utils/api-helpers'
import Spinner from '../../shared/components/Spinner';

export default function BooksList() {

    const [booksList, setBookList] = useState([])
    const [page, setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getData(page)
    }, [])

    function getData(page) {
        setLoading(true)
        commonGetJson('/books?page=' + page)
            .then(x => {
                setBookList(x.data)
                setTotalPages(x.totalPages)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    function prev() {
        setPage(page - 1)
        getData(page - 1)
    }

    function next() {
        setPage(page + 1)
        getData(page + 1)
    }

    return (
        <>
            <h1>BooksList</h1>
            <br />
            <button disabled={loading || (page == 1)} onClick={prev}>Prev</button>
            &nbsp;{page}&nbsp;
            <button disabled={loading || (totalPages == page)} onClick={next}>Next</button>
            <hr />
            {
                booksList.map(x => <BookItem data={x} />)
            }
        </>
    )
}
