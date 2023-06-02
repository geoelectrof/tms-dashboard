import { configureStore } from "@reduxjs/toolkit";
import shipmentsSlice from "./features/transports/shipmentsSlice";
import filtersOffCanvasSlice from "./features/filtersOffCanvas/filtersOffCanvasSlice";
import newShipmentModalSlice from "./features/newShipmentModal/newShipmentModalSlice";

export const store = configureStore({
    reducer: {
        shipments: shipmentsSlice,
        filtersOffCanvas: filtersOffCanvasSlice,
        newShipmentModal: newShipmentModalSlice
    },
})