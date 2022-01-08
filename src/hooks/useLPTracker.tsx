import { useReducer } from "react";
import { ValueOf } from "../utils/types";

import { clone } from "../utils/clone";
import { LpLogEntry } from "types";

type State = {
  lpLog: LpLogEntry[];
};

type Selectors = {
  lpLog: LpLogEntry[];
  lastLog: LpLogEntry;
};

type Actions = {
  increment: { type: "increment"; player: number };
  decrement: { type: "decrement"; player: number };
};

export type LpTrackerActions = {
  increment: (player: number) => void;
  decrement: (player: number) => void;
};

type ActonTypes = ValueOf<Actions>;

const reducer = (state: State, action: ActonTypes) => {
  const { type, player } = action;

  const { lpLog } = state;

  switch (type) {
    case "increment": {
      const _lpLog = clone(state.lpLog);
      let lastLog = { ..._lpLog.slice(-1)[0] };
      if (lastLog.lp[player] < 99) lastLog.lp[player] += 1;
      return { ...state, lpLog: [...lpLog, lastLog] };
    }

    case "decrement": {
      const _lpLog = clone(state.lpLog);
      let lastLog = { ..._lpLog.slice(-1)[0] };
      if (lastLog.lp[player] > 0) lastLog.lp[player] -= 1;
      return { ...state, lpLog: [...lpLog, lastLog] };
    }

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

const initialState: State = {
  lpLog: [{ lp: [20, 20] }],
};

export const useLPTracker = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { lpLog } = state;

  const actions: LpTrackerActions = {
    increment: (player) => dispatch({ type: "increment", player }),
    decrement: (player) => dispatch({ type: "decrement", player }),
    // change: (player: number) => dispatch({ type: "change", player }),
    // surrender: (player: number) => dispatch({ type: "surrender", player }),
  };

  const selectors: Selectors = {
    lpLog,
    lastLog: lpLog?.slice(-1)[0] ?? { lp: [0, 0] },
  };

  return [selectors, actions] as const;
};
