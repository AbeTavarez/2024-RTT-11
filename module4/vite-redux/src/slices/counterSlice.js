import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    status: "pending",
  },
  reducers: {
    increase: (state, action) => {
      state.count += Number(action.payload);
    },
    decrease: (state, action) => {
        state.count -= Number(action.payload);
    }
  },
});

// export main reducer
export default counterSlice.reducer;

// Selectors
export const selectCount = (state) => state.counter.count;
export const selectState = (state) => state.counter;

// Actions
export const { increase, decrease} = counterSlice.actions;
