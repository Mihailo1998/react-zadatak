import { configureStore } from "@reduxjs/toolkit";
import txtSlice from "./text-slice";
import uiSlice from './ui-slice';

const store=configureStore({
    reducer:{ui: uiSlice.reducer, txt: txtSlice.reducer}
});

export default store;