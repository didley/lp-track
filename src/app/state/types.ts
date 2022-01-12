export type Player = {
  name: string;
  color: PlayerColor;
  cardRotation: 0 | 1 | 2 | 3;
  counters: number[];
  lp: number;
};

type PlayerColor = "red" | "blue";

export type LpLogEntry = {
  lp: number;
  change?: number;
  surrender?: boolean;
}[];

export type GlobalState = {
  players: Player[];
  lpLog: LpLogEntry[];
};

export type Action =
  | { type: "lp/increment"; playerIndex: number }
  | { type: "lp/decrement"; playerIndex: number }
  | { type: "counter/increment"; playerIndex: number; counterIndex: number }
  | { type: "counter/decrement"; playerIndex: number; counterIndex: number }
  | { type: "counter/add"; playerIndex: number }
  | { type: "counter/remove"; playerIndex: number; counterIndex: number };
