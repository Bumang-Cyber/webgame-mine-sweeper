import { configureStore } from "@reduxjs/toolkit";
import levelSlice from "./levelSlice";
import playingStateSlice from "./playingStateSlice";
import goalAmountSlice from "./goalAmountSlice";
import mineLeftSlice from "./mineLeftSlice";

const store = configureStore({
  reducer: {
    levels: levelSlice.reducer,
    playing: playingStateSlice.reducer,
    goalAmount: goalAmountSlice.reducer,
    mineLeft: mineLeftSlice.reducer,
  },
});

// store의 reducer들의 현재 상태의 type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
