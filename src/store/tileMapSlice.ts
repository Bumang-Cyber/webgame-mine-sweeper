import { LevelValueType } from "./../types/level";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: { [key: string]: LevelValueType };
};

const initialState: InitialState = {
  value: {
    Beginner: {
      TITLE: "Beginner",
      X: 8,
      Y: 8,
      MINE: 10,
    },
    Intermediate: {
      TITLE: "Intermediate",
      X: 16,
      Y: 16,
      MINE: 40,
    },
    Expert: {
      TITLE: "Expert",
      X: 32,
      Y: 16,
      MINE: 100,
    },
    Custom: {
      TITLE: "Custom",
      X: 8,
      Y: 8,
      MINE: 10,
    },
  },
};

const tileSlice = createSlice({
  name: "tile",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default tileSlice;
export const { change } = tileSlice.actions;
