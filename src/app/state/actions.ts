import { Action } from "./types";
export const actions = {
  lp: {
    increment: (playerIndex: Action["playerIndex"]): Action => ({
      type: "lp/increment",
      playerIndex,
    }),
    // decrement: (playerIndex: Action["playerIndex"]): Action => ({
    //   type: "lp/decrement",
    //   playerIndex,
    // }),
  },
};
