import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commonGetJson } from "../shared/utils/api-helpers";

export const getAllPosts = createAsyncThunk('getAllPosts', async () => {
    return commonGetJson('/posts')
})



const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isPostLoading: false
    },
    extraReducers: (builder) => {

        builder.addCase(getAllPosts.pending, (state, action) => {
            state.isPostLoading = true;
        })
        builder.addCase(getAllPosts.fulfilled, (state, action) => {
            state.isPostLoading = false;
            state.posts = [...action.payload]
        })
        builder.addCase(getAllPosts.rejected, (state, action) => {
            state.isPostLoading = false;
        })

    }
})


export default postsSlice;