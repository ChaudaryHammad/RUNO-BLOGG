import { combineReducers,configureStore } from "@reduxjs/toolkit";
import userSlice from "./feature/user/userSlice";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore';
import blogSlice from "./feature/blog/blogSlice";


const rootReducer = combineReducers({
    user:userSlice,
    blogs:blogSlice
})

const persistConfig = {
    key:'root',
    storage,
    version:1,
    whitelist: ['user']
}

const persistedReducer = persistReducer(persistConfig,rootReducer)


export const store = configureStore({
    reducer: persistedReducer

,



    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false
    })
})

export const persistor = persistStore(store)