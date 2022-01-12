import { GlobalState } from "app/state/types";

export const initStore: GlobalState = {
  players: [
    {
      name: "Blue",
      color: "red",
      cardRotation: 0,
      counters: [2, 4, 0, 0],
      lp: 20,
    },
    {
      name: "Jill",
      color: "blue",
      cardRotation: 0,
      counters: [2, 4, 0, 0],
      lp: 20,
    },
  ],
  lpLog: [
    [{ lp: 4000 }, { lp: 4000 }],
    [{ lp: 3900, change: -100 }, { lp: 4000 }],
    [{ lp: 3900, surrender: true }, { lp: 4000 }],
  ],
};
