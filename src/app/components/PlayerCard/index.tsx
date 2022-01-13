import { useGlobalCtx } from "app/state/context";
import { select } from "app/state/selectors";
import { Counters } from "./Counters";
import {
  MinusIconSolid,
  PlusIconSolid,
  RotateIcon,
} from "app/components/icons";
import { useState } from "react";

type Props = { playerIndex: number };

export const PlayerCard = ({ playerIndex }: Props) => {
  const [state, dispatch] = useGlobalCtx();
  const player = select.player(state, playerIndex);
  const [rotation, setRotation] = useState<number>(() => player.cardRotation);

  const handleRotation = () => {
    dispatch({ type: "player/rotate", playerIndex });
    setRotation((prev) => prev + 190);
    setTimeout(() => setRotation((prev) => prev - 10), 200);
  };

  const bgColorClass = {
    red: "bg-red-500 h-full w-full text-center",
    blue: "bg-blue-500 h-full w-full text-center",
  };

  return (
    <div
      className={bgColorClass[player.color]}
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: "0.2s",
      }}
    >
      <h1 className="text-white my-1 py-1">{player.name}</h1>
      <div className="my-2 border-y flex justify-around relative">
        <button
          onClick={() => dispatch({ type: "lp/decrement", playerIndex })}
          className="z-10 absolute left-0 h-full w-1/2 active:opacity-30 active:bg-white"
        />
        <button
          onClick={() => dispatch({ type: "lp/increment", playerIndex })}
          className="z-10 absolute right-0 h-full w-1/2 active:opacity-30 active:bg-white"
        />
        <div className="w-full grid grid-cols-4 relative">
          <span className="text-black opacity-20 text-4xl place-self-center">
            <MinusIconSolid />
          </span>
          <h2 className="text-7xl text-white col-span-2">{player.lp}</h2>
          <span className="text-black opacity-20 text-4xl place-self-center">
            {<PlusIconSolid />}
          </span>
        </div>
      </div>
      <Counters playerIndex={playerIndex} />
      {playerIndex > 0 && (
        <button
          onClick={handleRotation}
          className="absolute bottom-0 mb-5 right-0 mr-5 w-8 h-8 opacity-30"
        >
          <RotateIcon />
        </button>
      )}
    </div>
  );
};
