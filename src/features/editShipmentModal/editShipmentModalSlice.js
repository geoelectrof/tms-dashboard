import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

const editShipmentModalSlice = createSlice({
  name: "editShipmentModal",
  initialState,
  reducers: {
    showEditShipmentModal: (state) => {
      state.show = true;
    },
    hideEditShipmentModal: (state) => {
      state.show = false;
    },
  },
});

export default editShipmentModalSlice.reducer;
export const { showEditShipmentModal, hideEditShipmentModal } =
  editShipmentModalSlice.actions;
