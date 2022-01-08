import { LpLogEntry } from "types";

export type State = {
  lpLog: LpLogEntry[];
};

export type Actions =
  | { type: "lp/increment"; playerIndex: number }
  | { type: "lp/decrement"; playerIndex: number };

export type Selectors = {
  lpLog: LpLogEntry[];
  lastLog: LpLogEntry;
};
