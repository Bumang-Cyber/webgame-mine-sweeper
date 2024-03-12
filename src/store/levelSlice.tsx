import { createSlice } from "@reduxjs/toolkit";
import { LevelKeyType } from "../types/level";

type InitialState = {
  value: LevelKeyType;
};

const initialState: InitialState = {
  // constant에 모든 레벨 상수화
  value: "Beginner",
};

const levelSlice = createSlice({
  name: "level",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default levelSlice;
export const { change } = levelSlice.actions;
