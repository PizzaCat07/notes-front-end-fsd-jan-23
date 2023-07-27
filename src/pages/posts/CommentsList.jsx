import React, { useEffect, useState } from 'react'
import { commonGetJson, commonPostJson } from '../../shared/utils/api-helpers'
import CommnetItem from './CommnetItem'
import { TextField } from '@mui/material'
import { useForm } from 'react-hook-form';

export default function CommentsList({ postId }) {
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();

    const [comments, setComments] = useState([])
    useEffect(() => {
        commonGetJson('/comments/' + postId).then(response => {
            setComments(response)
        })

    }, [])

    function addComment(data) {
        commonPostJson('/comments/' + postId,data).then(response => {
            setComments(response)
        })
    }

    return (

        <div>
            <form onSubmit={handleSubmit(addComment)}>
                <TextField {...register('commentText')} label='Write a comment' />
            </form>
            <hr />
            {
                comments.map(x => {
                    <CommnetItem commentObject={x} allComments={comments} />
                })
            }
        </div>
    )
}
