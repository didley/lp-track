import { clone } from "../utils/clone";
import { Actions, State } from "./useTracker.types";
import { Player } from "types";

export const useTrackerReducer = (state: State, action: Actions): Player => {
  const { name, color, cardRotation, lpLog, counters } = state;
  const { type, playerIndex } = action;

  switch (type) {
    case "lp/increment": {
      const _lpLog = clone(state.lpLog);
      let lastLog = { ..._lpLog.slice(-1)[0] };
      if (lastLog.lp < 99) lastLog.lp += 1;
      return { ...state, lpLog: [...lpLog, lastLog] };
    }

    case "lp/decrement": {
      const _lpLog = clone(state.lpLog);
      let lastLog = { ..._lpLog.slice(-1)[0] };
      if (lastLog.lp > 0) lastLog.lp -= 1;
      return { ...state, lpLog: [...lpLog, lastLog] };
    }

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};
