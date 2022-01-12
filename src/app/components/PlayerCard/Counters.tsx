import { useGlobalCtx } from "app/state/context";
import { select } from "app/state/selectors";
import { MinusIcon, PlusIcon, DelIcon } from "app/utils/icons";

type Props = {
  playerIndex: number;
};

const iconClass = "w-6 h-6";

export const Counters = ({ playerIndex }: Props) => {
  const [state, dispatch] = useGlobalCtx();

  const counters: number[] = select.player(state, playerIndex).counters;

  return (
    <>
      <label className="text-white text-left font-bold">Counters</label>
      <ul className="grid grid-cols-2 my-1 gap-2">
        {counters &&
          counters.map((counter, counterIndex) => (
            <li
              key={counterIndex}
              className="text-5xl text-white border-y odd:border-r even:border-l flex justify-around relative"
            >
              <div>
                <button
                  onClick={() =>
                    dispatch({
                      type: "counter/decrement",
                      playerIndex,
                      counterIndex,
                    })
                  }
                  className="z-10 absolute left-0 h-full w-1/2 opacity-0 active:opacity-30 active:bg-white"
                />
                <button
                  onClick={() =>
                    dispatch({
                      type: "counter/increment",
                      playerIndex,
                      counterIndex,
                    })
                  }
                  className="z-10 absolute right-0 h-full w-1/2 opacity-0 active:opacity-30 active:bg-white"
                  style={counter < 9 ? {} : { visibility: "hidden" }}
                />
              </div>
              <div className="w-full flex justify-evenly">
                <span className="text-black opacity-20 text-4xl place-self-center">
                  {counter > 0 ? (
                    <MinusIcon className={iconClass} />
                  ) : (
                    <DelIcon className={iconClass} />
                  )}
                </span>
                <span className="py-1 w-10">{counter}</span>
                <span
                  className="text-black opacity-20 text-4xl place-self-center"
                  style={counter < 9 ? {} : { visibility: "hidden" }}
                >
                  {<PlusIcon className={iconClass} />}
                </span>
              </div>
            </li>
          ))}
        {counters.length < 4 && (
          <button
            onClick={() => dispatch({ type: "counter/add", playerIndex })}
            className="text-white h-14 max-h-full w-full py-1 place-self-center first:col-span-2"
          >
            Add counter
          </button>
        )}
      </ul>
    </>
  );
};
