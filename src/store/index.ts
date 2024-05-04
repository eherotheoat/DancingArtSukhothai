import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todo'
import login from './login'

const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        login: login.reducer
    },
    devTools: process.env.NODE_ENV === "production" ? false : true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;