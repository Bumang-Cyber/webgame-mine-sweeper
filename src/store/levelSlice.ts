import { LevelValueType } from "./../types/level";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: LevelValueType;
};

const initialState: InitialState = {
  // constant에 모든 레벨 상수화
  value: {
    TITLE: "Beginner",
    X: 8,
    Y: 8,
    MINE: 10,
  },
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
