import { createSlice } from "@reduxjs/toolkit";

const qcSlice = createSlice({
  name: "qc",
  initialState: {
    qcWhoIsVis: true,
    qcWhatIsVis: false,
    qcWhenIsVis: false,
    qcWhereIsVis: false
  },
  reducers: {
    next(state) {
      if (state.qcWhoIsVis === true) {
        state.qcWhoIsVis = !state.qcWhoIsVis;
        state.qcWhatIsVis = !state.qcWhatIsVis;
      } else if (state.qcWhatIsVis === true) {
        state.qcWhatIsVis = !state.qcWhatIsVis;
        state.qcWhenIsVis = !state.qcWhenIsVis;
      } else if (state.qcWhenIsVis === true) {
        state.qcWhenIsVis = !state.qcWhenIsVis;
        state.qcWhereIsVis = !state.qcWhereIsVis;
      }
    },
    prev(state) {
      if (state.qcWhereIsVis === true) {
        state.qcWhereIsVis = !state.qcWhereIsVis;
        state.qcWhenIsVis = !state.qcWhenIsVis;
      } else if (state.qcWhenIsVis === true) {
        state.qcWhatIsVis = !state.qcWhatIsVis;
        state.qcWhenIsVis = !state.qcWhenIsVis;
      } else if (state.qcWhatIsVis === true) {
        state.qcWhatIsVis = !state.qcWhatIsVis;
        state.qcWhoIsVis = !state.qcWhoIsVis;
      }
    },
    reset(state){
      state.qcWhoIsVis=true;
      state.qcWhatIsVis=false;
      state.qcWhenIsVis=false;
      state.qcWhereIsVis=false;
    }
  },
});

export const qcActions = qcSlice.actions;

export default qcSlice;
