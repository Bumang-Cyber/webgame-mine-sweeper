import { createSlice } from "@reduxjs/toolkit";
import { ModalType } from "@/types/modal";

type InitialState = {
  value: ModalType;
};

const initialState: InitialState = {
  value: "None",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default modalSlice;
export const { change } = modalSlice.actions;
