import { configureStore } from "@reduxjs/toolkit";
import qcSlice from "./qc-slice";
import txtSlice from "./text-slice";
import uiSlice from './ui-slice';

const store=configureStore({
    reducer:{ui: uiSlice.reducer, txt: txtSlice.reducer, qc: qcSlice.reducer}
});

export default store;