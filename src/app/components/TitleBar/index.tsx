import { TitleBarMenu } from "./TitleBarMenu";
import { useGlobalCtx } from "app/state/context";
import { useReducer } from "react";
import { ChevronDownIcon } from "../icons";

const initialState = {
  menuOpen: false,
  settingsOpen: false,
  infoOpen: false,
};

export type Action =
  | { type: "menu/close" }
  | { type: "menu/open" }
  | { type: "menu/settingsOpen" }
  | { type: "menu/infoOpen" };

const titleBarReducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case "menu/close":
      return { ...state, ...initialState };
    case "menu/open":
      return { ...state, menuOpen: true, settingsOpen: false, infoOpen: false };
    case "menu/settingsOpen":
      return { ...state, menuOpen: true, settingsOpen: true, infoOpen: false };
    case "menu/infoOpen":
      return { ...state, menuOpen: true, settingsOpen: false, infoOpen: true };
  }
};

export const TitleBar = () => {
  const [state, dispatch] = useGlobalCtx();
  const { trackerOpts, players } = state;
  const [titleBarState, titleBarDispatch] = useReducer(
    titleBarReducer,
    initialState
  );

  let title = trackerOpts.gameName;

  if (players[0].lp === 0) title = `${players[1].name} wins!`;
  if (players[1].lp === 0) title = `${players[0].name} wins!`;
  if (players[0].lp === 0 && players[1].lp === 0) title = "Draw";

  return (
    <div className="bg-black text-white flex w-full text-center items-center justify-between">
      {titleBarState.menuOpen ? (
        <TitleBarMenu titleBarDispatch={titleBarDispatch} />
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
            onClick={() => titleBarDispatch({ type: "menu/open" })}
          >
            <ChevronDownIcon className="w-4 h-4" />
            Menu
          </button>
        </>
      )}
    </div>
  );
};
