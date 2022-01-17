import { useGlobalCtx } from "app/state/context";
import { select } from "app/state/selectors";
import { Counters } from "./Counters";
import { RotateIcon } from "app/components/icons";
import { useState } from "react";
import { StepLp } from "./StepLP";
import { NumpadLp } from "./NumpadLP";

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
        {state.trackerOpts.lpChangeType === "step" ? (
          <StepLp player={player} playerIndex={playerIndex} />
        ) : (
          <NumpadLp player={player} playerIndex={playerIndex} />
        )}
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
