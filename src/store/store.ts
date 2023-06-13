/** redux */
import { configureStore } from '@reduxjs/toolkit'
/** slice */
import { sidebarSlice } from './slice/sidebarSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch