import { combineReducers,configureStore } from "@reduxjs/toolkit";
import userSlice from "./feature/user/userSlice";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore';
import blogSlice from "./feature/blog/blogSlice";

const store = configureStore({
    reducer: {
      user: userSlice,
        blogs: blogSlice,
    },
  });
  
  export default store;