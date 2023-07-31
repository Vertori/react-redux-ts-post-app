import { createSlice } from "@reduxjs/toolkit";

interface countState {
  count: number;
}

const initialStateValue: countState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialStateValue,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
