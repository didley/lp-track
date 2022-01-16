import { useState } from "react";
import { GameModes } from "../GameModes";
import { ChevronLeftIcon, SettingsIcon } from "../icons";
import { Action } from "./index";

type Props = {
  titleBarDispatch: React.Dispatch<Action>;
};

export const TitleBarMenu = ({ titleBarDispatch }: Props) => {
  const [settingsVisible, setSettingsVisible] = useState(false);
  return (
    <>
      <SettingsIcon
        className="w-8 mx-8"
        onClick={() => setSettingsVisible(true)}
      />

      <button
        className="w-20 flex items-center"
        onClick={() => titleBarDispatch({ type: "menu/close" })}
      >
        <ChevronLeftIcon className="w-4 h-4" /> Menu
      </button>

      {settingsVisible && (
        <div className="w-screen h-screen z-10 absolute inset-0 text-gray-900">
          <div className="absolute text-left p-4 left-0 right-0 ml-auto mr-auto mt-auto mb-auto inset-0 w-72 z-20 bg-white shadow-lg max-h-56 rounded-2xl text-base overflow-auto sm:text-sm">
            <h6>Game</h6>

            <GameModes
              className="p-2 text-gray-900 bg-gray-50 rounded-lg w-full border"
              titleBarDispatch={titleBarDispatch}
            />
          </div>
          <div
            className="absolute inset-0 bottom-0 top-0 z-10"
            onClick={() => titleBarDispatch({ type: "menu/close" })}
          />
        </div>
      )}
    </>
  );
};
