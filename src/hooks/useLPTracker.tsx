import { useReducer } from "react";
import produce from "immer";
import { ValueOf } from "../utils/types";

type LpLogEntry = {
  lp: number[];
  change?: number[];
  surrender?: boolean[];
};

type State = {
  lpLog: LpLogEntry[];
};

type Selectors = {
  lpLog: LpLogEntry[];
  latestLp: number[];
};

type Actions = {
  increment: { type: "increment"; player: number };
  decrement: { type: "decrement"; player: number };
};

export type ActionCreators = {
  increment: (player: number) => void;
  decrement: (player: number) => void;
};

type ActonTypes = ValueOf<Actions>;

const reducer = (state: State, action: ActonTypes) => {
  const { type, player } = action;

  switch (type) {
    case "increment":
      return produce(state, (draft) => {
        let latestLog = draft.lpLog.slice(-1)[0];
        latestLog.lp[player] += 1;
        draft.lpLog.push(latestLog);
      });

    case "decrement":
      return produce(state, (draft) => {
        let latestLog = draft.lpLog.slice(-1)[0];
        latestLog.lp[player] -= 1;
        draft.lpLog.push(latestLog);
      });

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

const initialState: State = {
  lpLog: [
    { lp: [20, 20] },
    { lp: [20, 19] },
    { lp: [20, 18] },
    { lp: [19, 18] },
  ],
};

export const useLPTracker = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { lpLog } = state;

  const actions = {
    increment: (player: number) => dispatch({ type: "increment", player }),
    decrement: (player: number) => dispatch({ type: "decrement", player }),
    // change: (player: number) => dispatch({ type: "change", player }),
    // surrender: (player: number) => dispatch({ type: "surrender", player }),
  };

  const selectors: Selectors = {
    lpLog,
    latestLp: lpLog?.slice(-1)[0]?.lp ?? [0, 0],
  };

  return [selectors, actions] as const;
};
