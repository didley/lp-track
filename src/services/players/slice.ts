import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Player } from "types";
import { initStore } from "mockStore";

export const playersSlice = createSlice({
  name: "players",
  initialState: initStore.players,
  reducers: {
    incrementLp: (state, action: PayloadAction<number>) => {
      console.log({ state });
      // state.players[action.playerIndex].lp += 1;
    },
  },
});

export const playerActions = playersSlice.actions;
