import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, actions) => {
      state.count = state.count + actions.payload;
    },
    dengrement: (state, actions) => {
      state.count = state.count - actions.payload;
    },
  },
});

export const { increment, dengrement } = counterSlice.actions;

export default counterSlice.reducer;
