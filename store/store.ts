import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/store/features/counterSlice'
const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})

export default store

export type Rootstate = ReturnType<typeof store.getState>