import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  operation: ""
};

const confirmationModalSlice = createSlice({
  name: "confirmationModal",
  initialState,
  reducers: {
    openConfirmationModal: (state, actions) => {
      state.open = true;
      state.operation = actions.payload
    },
    closeConfirmationModal: (state) => {
      state.open = false;
      state.operation = ""
    },
  },
});

export default confirmationModalSlice.reducer;
export const { openConfirmationModal, closeConfirmationModal } =
  confirmationModalSlice.actions;
