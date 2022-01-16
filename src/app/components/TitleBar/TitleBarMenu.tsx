import { useGlobalCtx } from "app/state/context";
import { GameModes } from "../GameModes";
import { ChevronLeftIcon, HeartIcon, InfoIcon, SettingsIcon } from "../icons";
import logo from "app/assets/apple-touch-icon.png";

export const TitleBarMenu = () => {
  const [state, dispatch] = useGlobalCtx();
  const { titleBar } = state;
  return (
    <>
      <SettingsIcon
        className="w-8 mx-8"
        onClick={() => dispatch({ type: "menu/settingsOpen" })}
      />

      <InfoIcon
        className="w-8 mx-8 text-blue-500"
        onClick={() => dispatch({ type: "menu/infoOpen" })}
      />

      <button
        className="w-20 flex items-center"
        onClick={() => dispatch({ type: "menu/close" })}
      >
        <ChevronLeftIcon className="w-4 h-4" /> Menu
      </button>

      {titleBar.settingsOpen && (
        <div className="w-screen h-screen z-10 absolute inset-0 text-gray-900">
          <div className="absolute text-left p-4 left-0 right-0 ml-auto mr-auto mt-auto mb-auto inset-0 w-72 z-20 bg-white shadow-lg max-h-56 rounded-2xl text-base overflow-auto sm:text-sm">
            <h6>Game</h6>

            <GameModes className="p-2 text-gray-900 bg-gray-50 rounded-lg w-full border" />
          </div>
          <div
            className="absolute inset-0 bottom-0 top-0 z-10"
            onClick={() => dispatch({ type: "menu/close" })}
          />
        </div>
      )}

      {titleBar.infoOpen && (
        <div className="w-screen h-screen z-10 absolute inset-0 text-gray-900">
          <div className="absolute text-left p-4 left-0 right-0 ml-auto mr-auto mt-auto mb-auto inset-0 w-72 z-20 bg-white shadow-lg max-h-56 rounded-2xl text-base overflow-auto sm:text-sm">
            <img src={logo} alt="Logo" className="w-20" />
            <p className="mt-5">
              Made with <HeartIcon className="w-4 h-4 inline text-red-500" /> in
              Melbourn by{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/_didley"
                className="text-blue-500 font-bold"
              >
                @_didley
              </a>
              <br />
              <br />
              View the projects code on{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/didley/lp-track"
                className="text-gray-500 font-bold"
              >
                GitHub
              </a>
            </p>
          </div>
          <div
            className="absolute inset-0 bottom-0 top-0 z-10"
            onClick={() => dispatch({ type: "menu/close" })}
          />
        </div>
      )}
    </>
  );
};
