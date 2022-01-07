import { Counters } from "./Counters";
import { ActionCreators } from "../../hooks/useLPTracker";

type Colors = "red" | "blue";

type Props = {
  playerName: string;
  playerNumber: number;
  color: Colors;
  lifePoints: number | "surrender";
  counters?: number[];
  lpActions: ActionCreators;
};

export const PlayerCard = ({
  playerName,
  playerNumber,
  color,
  lifePoints,
  counters,
  lpActions,
}: Props) => {
  const bgColorClass = {
    red: "bg-red-500 h-full w-full text-center",
    blue: "bg-blue-500 h-full w-full text-center",
  };

  return (
    <div className={bgColorClass[color]}>
      <h1 className="text-white my-1 py-1">{playerName}</h1>
      <div className="my-2 border-y flex justify-around relative">
        <button
          onClick={() => lpActions.decrement(playerNumber)}
          className="z-10 absolute left-0 h-full w-1/2 active:opacity-30 active:bg-white"
        />
        <button
          onClick={() => lpActions.increment(playerNumber)}
          className="z-10 absolute right-0 h-full w-1/2 active:opacity-30 active:bg-white"
        />
        <span className="text-black opacity-10 text-4xl place-self-center">
          {"-"}
        </span>
        <h2 className="text-7xl text-white my-2 py-1 relative">{lifePoints}</h2>
        <span className="text-black opacity-10 text-4xl place-self-center">
          {"+"}
        </span>
      </div>
      <Counters counters={counters} />
    </div>
  );
};
