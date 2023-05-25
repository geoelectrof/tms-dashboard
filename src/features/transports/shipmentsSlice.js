import { createSlice } from "@reduxjs/toolkit";
import shipmentsData from '../../data/shipments.json'

const initialState = {
    shipments: shipmentsData,
}

const shipmentsSlice = createSlice({
    name: 'shipments',
    initialState,
})

console.log(shipmentsSlice)

export default shipmentsSlice.reducer