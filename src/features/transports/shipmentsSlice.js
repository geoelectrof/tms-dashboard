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
            //Generate a new id
            //Not best practise
            let { id: newid } = state.shipments.reduce((prev, current) => {
                return prev.id > current.id ? prev : current;
            });
            newid = newid + 1;

            let today = new Date()
            today.setHours(0, 0, 0, 0)
            let deliveryDate = new Date(action.payload.deliveryDate) 
            deliveryDate.setHours(0, 0, 0, 0)
            // console.log('today', today, typeof today)
            // console.log('deliveryDate', deliveryDate, typeof deliveryDate)
            // console.log('deliveryDate>today', deliveryDate>today)
            // console.log('deliveryDate<today', deliveryDate<today)
            // console.log('deliveryDate==today', deliveryDate.getTime()==today.getTime())
            const diffTime = Math.abs(today - deliveryDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            console.log('diffDays', diffDays)
            
            let status = "in transit"
            if (deliveryDate.getTime() < today.getTime()) {
                status = "delayed"
            }
            
            state.shipments.push({...action.payload, id: newid, status: status})
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