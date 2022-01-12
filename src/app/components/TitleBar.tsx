import { useGlobalCtx } from "app/state/context";

export const TitleBar = () => {
  const [state, dispatch] = useGlobalCtx();
  const { gameOpts, players } = state;

  let title = `${gameOpts.name && gameOpts.name}${
    gameOpts.format && ` - ${gameOpts.format}`
  }`;

  if (players[0].lp === 0) title = `${players[1].name} wins!`;
  if (players[1].lp === 0) title = `${players[0].name} wins!`;
  if (players[0].lp === 0 && players[1].lp === 0) title = "Draw";

  return (
    <div className="bg-black text-white flex h-full w-full text-center items-center">
      <div className="h-full w-20 grid flex-none">
        {gameOpts.lifePoints.changeType === "numpad" && <button>Undo</button>}
        <button onClick={() => dispatch({ type: "game/reset" })}>Reset</button>
      </div>
      <div className="h-full grid grow">
        <h1 className="text-xl text-white m-auto flex-none">{title}</h1>
      </div>
      <button className="w-20">Menu</button>
    </div>
  );
};
