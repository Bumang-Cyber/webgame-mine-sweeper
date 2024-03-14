import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: number;
};

const initialState: InitialState = {
  value: 0,
};

const mineLeftSlice = createSlice({
  name: "mineLeft",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default mineLeftSlice;
export const { change } = mineLeftSlice.actions;
