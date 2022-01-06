import { useReducer } from "react";
import produce from "immer";

type PlayerLp = number | "surrender";

type PlayersLp = PlayerLp[];

type LpLogEntry = {
  lp: PlayersLp;
  change?: PlayersLp;
};

type State = {
  lpLog: LpLogEntry[];
};

type Action = {
  type: string;
  player: number;
};

export type Selectors = {
  lpLog: LpLogEntry[];
  latestLp: PlayersLp;
};

export type Actions = {
  increment: (player: number) => void;
};

const reducer = (state: State, action: Action) => {
  const { type, player } = action;

  switch (type) {
    case "increment":
      return produce(state, (draft) => {
        let lastLog = state.lpLog?.at(-1) ?? { lp: [0, 0] };
        const changingPlayerLp = (lastLog && lastLog?.lp[player]) ?? 0;
        const newLp: PlayerLp =
          changingPlayerLp === "surrender" ? "surrender" : changingPlayerLp + 1;

        lastLog.lp[player] = newLp;

        draft.lpLog.push(lastLog);
      });

    default:
      throw new Error();
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

export const useLPTracker = (): [Selectors, Actions] => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { lpLog } = state;

  const actions: Actions = {
    increment: (player: number) => dispatch({ type: "increment", player }),
    // decrement: (player: number) => dispatch({ type: "decrement", player }),
    // change: (player: number) => dispatch({ type: "change", player }),
    // surrender: (player: number) => dispatch({ type: "surrender", player }),
  };

  const selectors: Selectors = {
    lpLog,
    latestLp: lpLog.at(-1)?.lp ?? [0, 0],
  };

  return [selectors, actions];
};
