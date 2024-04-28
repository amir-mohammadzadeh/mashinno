import { createSlice } from '@reduxjs/toolkit'


const initialState = [];

const PostsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        setPosts:(state, action)=>{
            return [...action.payload]
        }
    },
})

export const { setPosts } = PostsSlice.actions ;

export default PostsSlice.reducer
