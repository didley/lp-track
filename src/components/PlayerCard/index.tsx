import { useTracker } from "hooks/useTracker";
// import { Counters } from "./Counters";
import { Player, LpLogEntry } from "types";

type Props = { initPlayer: Player; playerIndex: number; initLog: LpLogEntry[] };

export const PlayerCard = ({ initPlayer }: Props) => {
  const [selectors, actions] = useTracker(initPlayer);
  const { lastLog, color, name } = selectors;

  const bgColorClass = {
    red: "bg-red-500 h-full w-full text-center",
    blue: "bg-blue-500 h-full w-full text-center",
  };

  return (
    <div className={bgColorClass[color]}>
      <h1 className="text-white my-1 py-1">{name}</h1>
      <div className="my-2 border-y flex justify-around relative">
        <button
          onClick={() => actions.decrementLp()}
          className="z-10 absolute left-0 h-full w-1/2 active:opacity-30 active:bg-white"
        />
        <button
          onClick={() => actions.incrementLp()}
          className="z-10 absolute right-0 h-full w-1/2 active:opacity-30 active:bg-white"
        />
        <span className="text-black opacity-10 text-4xl place-self-center">
          {"-"}
        </span>
        <h2 className="text-7xl text-white my-2 py-1 relative">{lastLog.lp}</h2>
        <span className="text-black opacity-10 text-4xl place-self-center">
          {"+"}
        </span>
      </div>
      {/* <Counters
        counters={counters}
        actions={counterActions}
        player={player.number}
      /> */}
    </div>
  );
};
