type PlayerColor = "red" | "blue";

export type Player = {
  name: string;
  number: number;
  color: PlayerColor;
};

export type LpLogEntry = {
  lp: number[];
  change?: number[];
  surrender?: boolean[];
};
