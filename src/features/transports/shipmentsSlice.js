import { createSlice } from "@reduxjs/toolkit";
import shipmentsData from '../../data/shipments.json'

const initialState = {
    shipments: shipmentsData,
}

const shipmentsSlice = createSlice({
    name: 'shipments',
    initialState,
    reducers: {
        removeShipment: (state, action) => {
            const shipmentId = action.payload
            const newShipments = state.shipments.filter(shipment => {
                return shipment.id !== shipmentId
            })   
            state.shipments = newShipments
        },
    }
})

// console.log(shipmentsSlice)

export default shipmentsSlice.reducer
export const { removeShipment } = shipmentsSlice.actions