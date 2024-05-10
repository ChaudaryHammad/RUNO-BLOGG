import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        user:null,
        loading:false,
        error:false
    },
    reducers:{
        signInStart:(state)=>{
            state.loading = true
        },
        signInSuccess:(state,action)=>{
            state.user = action.payload;
            state.loading=false;
            state.error=false;
        },
        signInFail:(state)=>{
            state.loading = false;
            state.error = true;
        },

        logout:(state)=>{
            state.user = null;
            state.loading=false;
            state.error=false;
        }



    }
})


export const {signInStart,signInSuccess,signInFail,logout} = userSlice.actions;
export default userSlice.reducer;