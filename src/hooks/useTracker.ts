import { useReducer } from "react";
import { Player, LpLogEntry } from "types";
import { useTrackerReducer } from "./useTracker.reducer";

export const useTracker = (initPlayers: Player[], initLog: LpLogEntry[]) => {
  const [state, dispatch] = useReducer(useTrackerReducer, {
    initPlayers,
    initLog,
  });

  const selectors = {
    ...state,
    lastLog: state.lpLog?.slice(-1)[0] ?? { lp: [0, 0] },
  };

  const actions = {
    incrementLp: (playerIndex) =>
      dispatch({ type: "lp/increment", playerIndex }),
    decrementLp: (playerIndex) =>
      dispatch({ type: "lp/decrement", playerIndex }),
    // change: (player: number) => dispatch({ type: "change", player }),
    // surrender: (player: number) => dispatch({ type: "surrender", player }),
  };

  return [selectors, actions] as const;
};
