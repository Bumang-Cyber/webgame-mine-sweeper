import { configureStore } from "@reduxjs/toolkit";
import levelSlice from "./levelSlice";

const store = configureStore({
  reducer: {
    levels: levelSlice.reducer,
  },
});

// store의 reducer들의 현재 상태의 type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
