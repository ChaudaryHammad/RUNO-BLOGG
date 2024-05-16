import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: "blogs",
    initialState:{
        blogs:[]
    },

    reducers:{

        getBlog:(state,action)=>{
            state.blogs = action.payload

        },

        addBlog:(state,action)=>{
            state.blogs.push(action.payload)
        },
        updteBlog:(state,action)=>{
            const index = state.blogs.findIndex((blog)=>blog._id===action.payload._id)
            state.blogs[index] = action.payload
        }

    }
})


export const {getBlog,addBlog,updteBlog} =blogSlice.actions;
export default blogSlice.reducer;