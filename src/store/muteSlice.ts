import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: boolean;
};

const initialState: InitialState = {
  value: false,
};

const muteSlice = createSlice({
  name: "mute",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default muteSlice;
export const { change } = muteSlice.actions;
