import React from 'react'

export default function CommnetItem({ commentObject, allComments }) {
    return (
        <div>
            
                <div>{commentObject.commentText}</div>
                <div>{commentObject.authorName}</div>
        </div>
    )
}
