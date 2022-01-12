import { Action, GlobalState } from "./types";
import produce from "immer";

export const reducers = (state: GlobalState, action: Action) => {
  const { type } = action;

  switch (type) {
    case "lp/increment": {
      return produce(state, (draftState) => {
        if (draftState) {
          const { playerIndex } = action;
          const playerLp = draftState?.players[playerIndex].lp;
          if (playerLp < 99) draftState.players[playerIndex].lp += 1;
        }
      });
    }
    case "lp/decrement": {
      return produce(state, (draftState) => {
        if (draftState) {
          const { playerIndex } = action;

          const playerLp = draftState?.players[playerIndex].lp;
          if (playerLp > 0) draftState.players[playerIndex].lp -= 1;
        }
      });
    }
    case "counter/increment": {
      return produce(state, (draftState) => {
        if (draftState) {
          const { playerIndex } = action;
          const playerCounter =
            draftState?.players[playerIndex].counters[action.counterIndex];
          if (playerCounter < 9)
            draftState.players[playerIndex].counters[action.counterIndex] += 1;
        }
      });
    }
    case "counter/decrement": {
      return produce(state, (draftState) => {
        if (draftState) {
          const { playerIndex } = action;
          const playerCounter =
            draftState?.players[playerIndex].counters[action.counterIndex];
          if (playerCounter === 0) {
            // removes counter
            draftState.players[playerIndex].counters.splice(
              action.counterIndex,
              1
            );
          } else if (playerCounter > 0) {
            draftState.players[playerIndex].counters[action.counterIndex] -= 1;
          }
        }
      });
    }
    case "counter/add": {
      return produce(state, (draftState) => {
        const { playerIndex } = action;

        if (draftState) {
          const playerCounters = draftState?.players[playerIndex].counters;
          if (playerCounters.length < 4)
            draftState.players[playerIndex].counters.push(0);
        }
      });
    }
    case "game/reset": {
      return produce(state, (draftState) => {
        const defaultLp = draftState.gameOpts.lifePoints.default;
        draftState.players.map((player) => {
          player.lp = defaultLp;
          return (player.counters = [0]);
        });
      });
    }

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};
