export type Player = {
  name: string;
  color: PlayerColor;
  cardRotation: 0 | 1 | 2 | 3;
  counters: number[];
};

type PlayerColor = "red" | "blue";

export type LpLogEntry = {
  lp: number;
  change?: number;
  surrender?: boolean;
}[];

export type Tracker = {
  players: Player[];
  lpLpg: LpLogEntry[];
};
