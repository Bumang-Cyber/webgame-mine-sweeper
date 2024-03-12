import { createSlice } from "@reduxjs/toolkit";
import { playingType } from "@/types/playing";

type InitialState = {
  value: playingType;
};

const initialState: InitialState = {
  value: "stale",
};

const playingSlice = createSlice({
  name: "playing",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default playingSlice;
export const { change } = playingSlice.actions;
