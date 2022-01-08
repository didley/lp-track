import { useReducer } from "react";
import { clone } from "../utils/clone";

type State = number[][];

type Actions =
  | { type: "increment"; player: number; index: number }
  | { type: "decrement"; player: number; index: number }
  | { type: "add"; player: number };

export type ActionCreators = {
  increment: (player: number, index: number) => void;
  decrement: (player: number, index: number) => void;
  add: (player: number) => void;
};

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "increment": {
      const { player, index } = action;
      const _counters = clone(state);
      if (_counters[player][index] < 9) _counters[player][index] += 1;
      return _counters;
    }

    case "decrement": {
      const { player, index } = action;

      const _counters = clone(state);
      if (_counters[player][index] > 0) _counters[player][index] -= 1;
      return _counters;
    }

    case "add": {
      const { player } = action;
      const _counters = clone(state);
      _counters[player].push([0]);

      return _counters;
    }

    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
};

const initialState: State = [[3], [0]];

export const useCounters = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions: ActionCreators = {
    increment: (player, index) =>
      dispatch({ type: "increment", player, index }),
    decrement: (player, index) =>
      dispatch({ type: "decrement", player, index }),
    add: (player) => dispatch({ type: "add", player }),
  };

  return [state, actions] as const;
};
