import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../data/postsSlice';

export default function PostList() {

    const { posts, isPostLoading } = useSelector(state => state.posts)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllPosts())
    },[])


    return (
        <div>

            {
                posts.map(x => <div className='post-item'>{x.content}</div>)
            }
        </div>
    )
}
