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

export type GlobalState =
  | {
      players: Player[];
      lpLog: LpLogEntry[];
    }
  | undefined;

// type ActionType =
//   | "lp/increment"
//   | "lp/decrement"
//   | "counter/increment"
//   | "counter/decrement"
//   | "counter/add"
//   | "counter/remove";

// export type Action = {
//   type: ActionType;
//   playerIndex?: number;
// };

export type Action = { type: "lp/increment"; playerIndex: number };
