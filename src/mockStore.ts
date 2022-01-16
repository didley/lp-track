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
  gameConfigs: [
    {
      gameName: "Flesh and Blood",
      shortName: "FaB",
      surrenderAvailable: false,
      lpChangeType: "step",
      formats: [
        {
          formatName: "Blitz",
          defaultLp: 20,
        },
        {
          formatName: "Classic constructed",
          defaultLp: 40,
        },
      ],
    },
    {
      gameName: "Yu-Gi-Oh!",
      shortName: "YGO",
      surrenderAvailable: true,
      lpChangeType: "numpad",
      formats: [
        {
          formatName: "Master duel",
          defaultLp: 8000,
        },
        {
          formatName: "Speed duel",
          defaultLp: 4000,
        },
      ],
    },
    {
      gameName: "Custom",
      surrenderAvailable: false,
      lpChangeType: "step",
      formats: [{ formatName: "Custom", defaultLp: 20 }],
    },
  ],
  trackerOpts: {
    gameName: "Custom",
    formatName: "Custom",
    surrenderAvailable: false,
    lpChangeType: "step",
    defaultLp: 20,
  },
};
