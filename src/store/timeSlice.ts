import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: number;
};

const initialState: InitialState = {
  value: 0,
};

const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default timeSlice;
export const { change } = timeSlice.actions;
