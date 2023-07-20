import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewPost, getAllPosts } from '../../data/postsSlice';
import { Avatar, Button, TextField } from '@mui/material';

export default function PostList() {

    const [content, setContent] = useState('')
    const { posts, isPostLoading } = useSelector(state => state.posts)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    function save() {
        let postObject = {
            content
        }
        dispatch(createNewPost(postObject))
    }


    return (
        <div>


            
            <TextField value={content} onChange={e => setContent(e.target.value)} label="Content" variant='outlined' />
            <Button variant='contained' onClick={save}>Create Post</Button>

            <hr />

            {
                posts.map(x => <div className='post-item'>

                    <div className='heading'>
                        <Avatar>{x.author?.username?.charAt(0)}</Avatar>
                        <span>{x.author?.username}</span>
                    </div>
                    <p>{x.content}</p>
                </div>)
            }
        </div>
    )
}
