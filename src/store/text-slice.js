import { createSlice } from "@reduxjs/toolkit";

const txtSlice = createSlice({
  name: "txt",
  initialState: { Who:"",What:"",When:"",Where:""},
  reducers: {
    textSave(state, action) {
      console.log(action);
      return {...state,...action.payload};
      
    },
    resetTxt(state,action) {
      console.log(action);
      return {...state,...action.payload};
    },
  },
});

export const txtActions = txtSlice.actions;

export default txtSlice;
