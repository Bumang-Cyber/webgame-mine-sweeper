import { createSlice } from "@reduxjs/toolkit";
import { playingType } from "@/types/playing";

type InitialState = {
  value: playingType;
};

const initialState: InitialState = {
  value: "stale",
};

const playingStateSlice = createSlice({
  name: "playing",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default playingStateSlice;
export const { change } = playingStateSlice.actions;
