import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../todoSlice'

export const store = configureStore({
    reducer: {
        Todo : todoSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch