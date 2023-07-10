import React from 'react'

export default function BookItem({ data }) {
    return (
        <div className='book-item'>
            <img src={data.thumbnailUrl} />
            <h4>{data.title}</h4>
            <div>{data.categories.map(x =>x)}</div>
        </div>
    )
}
