import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./fetures/counter-reducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
