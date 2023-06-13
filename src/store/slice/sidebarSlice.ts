/** redux */
import { createSlice } from '@reduxjs/toolkit'
/** type */
import type { RootState } from '../store'


interface sidebarState {
  value: boolean
}

const initialState: sidebarState = {
  value: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setSliceState: (state) => {
      state.value = !state.value
    },
    closeSliceState: (state) => {
      state.value = false
    }
  },
})

export const { setSliceState, closeSliceState } = sidebarSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const toggleSidebar = (state: RootState) => state.sidebar.value

export default sidebarSlice;