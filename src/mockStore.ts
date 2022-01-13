import { GlobalState } from "app/state/types";

export const initStore: GlobalState = {
  players: [
    {
      name: "Player 1",
      color: "red",
      cardRotation: 0,
      counters: [0],
      lp: 20,
    },
    {
      name: "Player 2",
      color: "blue",
      cardRotation: 0,
      counters: [0],
      lp: 20,
    },
  ],
  lpLog: [
    [{ lp: 4000 }, { lp: 4000 }],
    [{ lp: 3900, change: -100 }, { lp: 4000 }],
    [{ lp: 3900, surrender: true }, { lp: 4000 }],
  ],
  gameOpts: {
    name: "FaB",
    format: "Blitz",
    lifePoints: {
      default: 20,
      changeType: "step",
    },
    surrenderAvailable: false,
  },
};
