import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "./Features/calculatorSlice/calculatorSlice";
export const Store = configureStore({
  reducer:{
    calculator: calculatorSlice,
  }
})