import { GlobalState } from "app/state/types";

export const initStore: GlobalState = {
  players: [
    {
      name: "Player 1",
      color: "red",
      cardRotation: 0,
      counters: [0],
      lp: 8000,
    },
    {
      name: "Player 2",
      color: "blue",
      cardRotation: 0,
      counters: [0],
      lp: 8000,
    },
  ],
  lpLog: [
    [{ lp: 4000 }, { lp: 4000 }],
    [{ lp: 3900, change: -100 }, { lp: 4000 }],
    [{ lp: 3900, surrender: true }, { lp: 4000 }],
  ],
  gameConfigs: [
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
      gameName: "Magic: The Gathering",
      shortName: "MTG",
      surrenderAvailable: false,
      lpChangeType: "step",
      formats: [
        {
          formatName: "20lp",
          defaultLp: 20,
        },
        {
          formatName: "Commander",
          defaultLp: 40,
        },
      ],
    },
    {
      gameName: "Custom",
      surrenderAvailable: false,
      lpChangeType: "step",
      formats: [{ formatName: "20lp", defaultLp: 20 }],
    },
  ],
  trackerOpts: {
    gameConfigKey: "Yu-Gi-Oh!,,Master duel",
    gameName: "Yu-Gi-Oh!",
    formatName: "Master duel",
    surrenderAvailable: true,
    lpChangeType: "numpad",
    defaultLp: 8000,
  },
  titleBar: {
    menuOpen: false,
    settingsOpen: false,
    infoOpen: false,
  },
};
