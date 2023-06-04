import { createSlice } from "@reduxjs/toolkit";
import shipmentsData from '../../data/shipments.json'

const initialState = {
    shipments: shipmentsData,
}

const shipmentsSlice = createSlice({
    name: 'shipments',
    initialState,
    reducers: {
        addShipment: (state, action) => {
            state.shipments.push(action.payload)
        },
        removeShipment: (state, action) => {
            const shipmentId = action.payload
            const newShipments = state.shipments.filter(shipment => {
                return shipment.id !== shipmentId
            })   
            state.shipments = newShipments
        },
        setShipmentStatusDelivered: (state, action) => {
            const shipmentId = action.payload
            const shipment = state.shipments.find(s => s.id == shipmentId)
            shipment.status = "delivered"

        }
    }
})

// console.log(shipmentsSlice)

export default shipmentsSlice.reducer
export const { addShipment, removeShipment, setShipmentStatusDelivered } = shipmentsSlice.actions