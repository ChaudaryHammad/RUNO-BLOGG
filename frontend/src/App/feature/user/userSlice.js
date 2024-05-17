import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = false;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    signInFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = false;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
});

export const { signInStart, signInSuccess, signInFail, logout } = userSlice.actions;
export default userSlice.reducer;
