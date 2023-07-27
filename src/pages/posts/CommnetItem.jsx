import React from 'react'

export default function CommnetItem({ commentObject, allComments }) {
    return (
        <div>
            
                <div>{commentObject.commentText}  - <i>{commentObject.author.username}</i></div>
        </div>
    )
}
