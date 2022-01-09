import { clone } from "../utils/clone";
import { Action, GlobalState } from "./types";

export const reducers = (state: GlobalState, action: Action): GlobalState => {
  const { type, playerIndex = 0 } = action;

  switch (type) {
    case "lp/increment": {
      const _state = clone(state ?? {});
      let playerLp = _state.players[playerIndex].lp;
      if (playerLp < 99) _state.players[playerIndex].lp += 1;
      return _state;

      //   let lastLog = { ..._lpLog.slice(-1)[0] };
      //   if (lastLog.lp < 99) lastLog.lp += 1;
      //   return { ...state, lpLog: [...lpLog, lastLog] };
    }

    // case "lp/decrement": {
    //   return state;
    //   //   const _lpLog = clone(state.lpLog);
    //   //   let lastLog = { ..._lpLog.slice(-1)[0] };
    //   //   if (lastLog.lp > 0) lastLog.lp -= 1;
    //   //   return { ...state, lpLog: [...lpLog, lastLog] };
    // }

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};
