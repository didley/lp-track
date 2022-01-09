import { useContext } from "react";
// import { Counters } from "./Counters";

import { actions as a } from "app/state/actions";
import { GlobalCtx } from "app/state/context";
import { select } from "app/state/selectors";

type Props = { playerIndex: number };

export const PlayerCard = ({ playerIndex }: Props) => {
  const ctx = useContext(GlobalCtx);

  const player = select.player(ctx?.state, playerIndex);

  const name = ctx?.state?.players[playerIndex].name;

  const bgColorClass = {
    red: "bg-red-500 h-full w-full text-center",
    blue: "bg-blue-500 h-full w-full text-center",
  };

  return (
    <div
      className={bgColorClass.red}
      // className={bgColorClass[color]}
    >
      <h1 className="text-white my-1 py-1">{name}</h1>
      <div className="my-2 border-y flex justify-around relative">
        <button
          // onClick={dispatch(a.lp.decrement(playerIndex))}
          className="z-10 absolute left-0 h-full w-1/2 active:opacity-30 active:bg-white"
        />
        <button
          onClick={() => ctx?.dispatch(a.lp.increment(playerIndex))}
          className="z-10 absolute right-0 h-full w-1/2 active:opacity-30 active:bg-white"
        />
        <span className="text-black opacity-10 text-4xl place-self-center">
          {"-"}
        </span>
        <h2 className="text-7xl text-white my-2 py-1 relative">{player?.lp}</h2>
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
