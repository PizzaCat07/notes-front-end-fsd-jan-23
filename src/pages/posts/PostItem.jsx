import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import CommentsList from './CommentsList'

export default function PostItem({ post }) {
    const [showComments, setShowComments] = useState(false)

    return (
        <div className='post-item'>

            <div className='heading'>
                {
                    post?.author?.avatar
                        ? <Avatar src={process.env.REACT_APP_BACKEND_URL + '/image/' + post?.author?.avatar} />
                        : <Avatar>{post.author?.username?.charAt(0)}</Avatar>
                }

                <span>{post.author?.username}</span>
            </div>
            <p>{post.content}</p>
            <p onClick={() => setShowComments(!showComments)}>{showComments ? 'hide' : 'show'} comments</p>
            {
                showComments ? <CommentsList postId={post._id} /> : <></>
            }
        </div>
    )
}
