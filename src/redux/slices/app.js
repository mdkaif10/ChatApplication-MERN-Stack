import React, { useState } from "react";
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
    updateAudioModal: (state, action) => {
      state.modals.audio = action.payload;
    },
  },
});

export default slice.reducer;

export const toggleGifModal = (value) => async (dispatch, getState) => {
  dispatch(slice.actions.updateGifModal(value));
};

export const toggleAudioModal = (value) => async (dispatch, getState) => {
  dispatch(slice.actions.updateAudioModal(value));
};
