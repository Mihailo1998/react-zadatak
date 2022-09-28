import { createSlice } from "@reduxjs/toolkit";

const txtSlice = createSlice({
  name: "txt",
  initialState: { Who:"",What:"",When:"",Where:""},
  reducers: {
    textSave(state,action) {
      console.log(action);
    },
  },
});

 
export const txtActions = txtSlice.actions; 

export default txtSlice;