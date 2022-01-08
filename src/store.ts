import { configureStore } from "@reduxjs/toolkit";
import { playersSlice } from "services/players/slice";

export const store = configureStore({
  reducer: {
    [playersSlice.name]: playersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
