import { configureStore } from "@reduxjs/toolkit";
import levelSlice from "./levelSlice";
import playingSlice from "./playingSlice";

const store = configureStore({
  reducer: {
    levels: levelSlice.reducer,
    playing: playingSlice.reducer,
  },
});

// store의 reducer들의 현재 상태의 type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
