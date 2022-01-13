export type Player = {
  name: string;
  color: PlayerColor;
  cardRotation: 0 | 90 | 180 | 270;
  counters: number[];
  lp: number;
};

type PlayerColor = "red" | "blue";

export type LpLogEntry = {
  lp: number;
  change?: number;
  surrender?: boolean;
}[];

type gameOpts = {
  name: string;
  format?: string;
  lifePoints: {
    default: number;
    changeType: "step" | "numpad";
  };
  surrenderAvailable: boolean;
};

export type GlobalState = {
  players: Player[];
  lpLog: LpLogEntry[];
  gameOpts: gameOpts;
};

export type Action =
  | { type: "lp/increment"; playerIndex: number }
  | { type: "lp/decrement"; playerIndex: number }
  | { type: "counter/increment"; playerIndex: number; counterIndex: number }
  | { type: "counter/decrement"; playerIndex: number; counterIndex: number }
  | { type: "counter/add"; playerIndex: number }
  | { type: "counter/remove"; playerIndex: number; counterIndex: number }
  | { type: "game/reset" }
  | { type: "player/rotate"; playerIndex: number };
