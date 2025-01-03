import { createSlice } from "@reduxjs/toolkit";
import { update } from "lodash";

const initialState = {
  modals: {
    gif: false,
  },
  selectedGifUrl: "",
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateGifModal: (state, action) => {
      state.modals.gif = action.payload;
      state.selectedGifUrl = action.payload.url;
    },
  },
});

export default slice.reducer;

export const toggleGifModal = (value) => async (dispatch, getState) => {
  dispatch(slice.actions.updateGifModal(value));
};
