import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { questionIsVisible: true },
  reducers: {
    toggle(state) {
      state.questionIsVisible = !state.questionIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions; 

export default uiSlice;
