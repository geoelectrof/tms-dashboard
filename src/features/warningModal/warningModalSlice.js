import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  warningMessage: "",
  id: ""
};

const warningModalSlice = createSlice({
  name: "warningModal",
  initialState,
  reducers: {
    showWarningModal: (state, actions) => {
      state.show = true;
      state.warningMessage = actions.payload.warningMessage
      state.id = actions.payload.id
    },
    hideWarningModal: (state) => {
      state.show = false;
      state.warningMessage = ""
      state.id = ""
    },
  },
});

export default warningModalSlice.reducer;
export const { showWarningModal, hideWarningModal} =
  warningModalSlice.actions;
