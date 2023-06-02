import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false
}

const newShipmentModalSlice = createSlice({
    name: "newShipmentModal",
    initialState,
    reducers: {
        showNewShipmentModal: state => {
            state.show = true
        },
        hideNewShipmentModal: state => {
            state.show = false
        }
    }
})

export default newShipmentModalSlice.reducer
export const { showNewShipmentModal, hideNewShipmentModal } = newShipmentModalSlice.actions