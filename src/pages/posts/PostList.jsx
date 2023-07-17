import React from 'react'
import { useSelector } from 'react-redux'

export default function PostList() {

    const { posts, isPostLoading } = useSelector(state => state.posts)


    return (
        <div>

            {
                posts.map(x => <div className='post-item'>{x.content}</div>)
            }
        </div>
    )
}
