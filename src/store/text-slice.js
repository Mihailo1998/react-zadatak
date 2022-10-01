import { createSlice } from "@reduxjs/toolkit";

const txtSlice = createSlice({
  name: "txt",
  initialState: {Who:"",What:"",When:"",Where:""},
  reducers: {
    textSave(state, action) {
      state.initialState=action.payload;
      console.log(action);
    },
    resetTxt(state) {

    },
  },
});

export const txtActions = txtSlice.actions;

export default txtSlice;
