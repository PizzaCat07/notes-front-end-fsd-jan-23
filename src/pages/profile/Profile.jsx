import { Button, TextField } from '@mui/material'
import { useForm } from "react-hook-form";
import React, { useEffect } from 'react'
import { commonGetJson, commonPatchJson } from '../../shared/utils/api-helpers';

export default function Profile() {

    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();

    useEffect(() => {
        commonGetJson('/profile')
            .then(response => {
                setValue('username', response.username)
                setValue('password', response.password)
            })
    }, [])

    function update(formData) {
        commonPatchJson('/profile', formData).then(response => {
            if(response.success){
                alert("Updated")
            }else{
                alert(response.message)
            }
        })
    }
    return (
        <>
            <div>Profile</div>
            <br />
            <br />
            <form onSubmit={handleSubmit(update)}>
                <TextField {...register("username")} label="Username" />
                <br />
                <br />
                <TextField {...register("password")} label="New Password" />
                <br />
                <br />
                <Button type='submit' variant='contained'>Update</Button>
            </form>

        </>
    )
}
