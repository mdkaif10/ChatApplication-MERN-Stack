import React, { useState } from "react";
import { createSlice } from "@reduxjs/toolkit";
import { update } from "lodash";

const initialState = {
  modals: {
    gif: false,
    audio: false,
    media: false,
    doc: false,
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
    updateMediaModal: (state, action) => {
      state.modals.media = action.payload;
    },
    updateDocumentModal: (state, action) => {
      state.modals.doc = action.payload;
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

export const toggleMediaModal = (value) => async (dispatch, getState) => {
  dispatch(slice.actions.updateMediaModal(value));
};

export const toggleDocumentModal = (value) => async (dispatch, getState) => {
  dispatch(slice.actions.updateDocumentModal(value));
};
