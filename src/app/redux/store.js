import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from '../redux/StoreSlice'

export const store = configureStore({
  reducer: {
    store : counterReducer
  },
})