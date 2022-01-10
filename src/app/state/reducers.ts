import { Action, GlobalState } from "./types";
import produce from "immer";

export const reducers = (state: GlobalState, action: Action): GlobalState => {
  const { type, playerIndex = 0 } = action;

  switch (type) {
    case "lp/increment": {
      return produce(state, (draftState) => {
        if (draftState) {
          const playerLp = draftState?.players[playerIndex].lp;
          if (playerLp < 99) draftState.players[playerIndex].lp += 1;
        }
      });
    }

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};
