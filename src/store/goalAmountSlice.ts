import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: number;
};

const initialState: InitialState = {
  value: -1,
};

const goalAmountSlice = createSlice({
  name: "goalAmount",
  initialState,
  reducers: {
    setGoalAmountTiles: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default goalAmountSlice;
export const { setGoalAmountTiles } = goalAmountSlice.actions;
