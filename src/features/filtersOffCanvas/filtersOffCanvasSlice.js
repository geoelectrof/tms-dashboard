import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false
}

const filtersOffCanvasSlice = createSlice({
    name: "filtersOffCanvas",
    initialState,
    reducers: {
        openFiltersOffCanvas: (state) => {
            state.open = true
        },
        closeFiltersOffCanvas: (state) => {
            state.open = false
        }
    }
})

export default filtersOffCanvasSlice.reducer
export const { openFiltersOffCanvas, closeFiltersOffCanvas } = filtersOffCanvasSlice.actions