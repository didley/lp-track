import { createContext, useReducer } from "react";
import { initStore } from "mockStore";
import { reducers } from "./reducers";
import { GlobalState, Action } from "./types";

export type CtxValue = {
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
};

export const GlobalCtx = createContext<CtxValue | null>(null);

export const GlobalProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducers, initStore);

  //   const selectors = {
  //     ...state,
  //     lastLog: state.lpLog?.slice(-1)[0] ?? { lp: [0, 0] },
  //   };

  return (
    <GlobalCtx.Provider value={{ state, dispatch }}>
      {children}
    </GlobalCtx.Provider>
  );
};
