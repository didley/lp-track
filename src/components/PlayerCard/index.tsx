import { Counters } from "./Counters";
import { LpTrackerActions } from "hooks/useLPTracker";
import { LpLogEntry, Player } from "types";
import { ActionCreators as CounterActions } from "hooks/useCounters";

type Props = {
  player: Player;
  lastLpLog: LpLogEntry;
  counters?: number[];
  lpActions: LpTrackerActions;
  counterActions: CounterActions;
};

export const PlayerCard = ({
  player,
  lastLpLog,
  counters,
  lpActions,
  counterActions,
}: Props) => {
  const bgColorClass = {
    red: "bg-red-500 h-full w-full text-center",
    blue: "bg-blue-500 h-full w-full text-center",
  };

  return (
    <div className={bgColorClass[player.color]}>
      <h1 className="text-white my-1 py-1">{player.name}</h1>
      <div className="my-2 border-y flex justify-around relative">
        <button
          onClick={() => lpActions.decrement(player.number)}
          className="z-10 absolute left-0 h-full w-1/2 active:opacity-30 active:bg-white"
        />
        <button
          onClick={() => lpActions.increment(player.number)}
          className="z-10 absolute right-0 h-full w-1/2 active:opacity-30 active:bg-white"
        />
        <span className="text-black opacity-10 text-4xl place-self-center">
          {"-"}
        </span>
        <h2 className="text-7xl text-white my-2 py-1 relative">
          {lastLpLog.lp[player.number]}
        </h2>
        <span className="text-black opacity-10 text-4xl place-self-center">
          {"+"}
        </span>
      </div>
      <Counters
        counters={counters}
        actions={counterActions}
        player={player.number}
      />
    </div>
  );
};
