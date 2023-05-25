import { configureStore } from "@reduxjs/toolkit";
import shipmentsSlice from "./features/transports/shipmentsSlice";

export const store = configureStore({
    reducer: {
        shipments: shipmentsSlice,
    },
})