import { TitleBarMenu } from "./TitleBarMenu";
import { useGlobalCtx } from "app/state/context";
import { ChevronDownIcon } from "../icons";

export const TitleBar = () => {
  const [state, dispatch] = useGlobalCtx();
  const { trackerOpts, players, titleBar } = state;
  const { gameName, formatName, defaultLp } = trackerOpts;

  let title = `${gameName} | ${formatName} ${defaultLp}lp`;

  if (players[0].lp === 0) title = `${players[1].name} wins!`;
  if (players[1].lp === 0) title = `${players[0].name} wins!`;
  if (players[0].lp === 0 && players[1].lp === 0) title = "Draw";

  return (
    <div className="bg-black text-white flex w-full text-center items-center justify-between">
      {titleBar.menuOpen ? (
        <TitleBarMenu />
      ) : (
        <>
          <div className="w-20 grid">
            {/* {gameOpts.lifePoints.changeType === "numpad" && <button>Undo</button>} */}
            <button onClick={() => dispatch({ type: "game/reset" })}>
              Reset
            </button>
          </div>
          <div className="grid grow">
            <h1 className="text-xl text-white m-auto">{title}</h1>
          </div>
          <button
            className="w-20 flex items-center"
            onClick={() => dispatch({ type: "menu/open" })}
          >
            <ChevronDownIcon className="w-4 h-4" />
            Menu
          </button>
        </>
      )}
    </div>
  );
};
