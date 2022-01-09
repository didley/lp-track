// import { Actions } from "hooks/useTracker.types";

type Props = {
  counters?: number[];
  // actions: Actions;
};

export const Counters = ({ counters = [] }: Props) => {
  // const handleMinus = (player: number, index: number) => {
  //   actions.decrement(player, index);
  // };

  return (
    <>
      <div>{counters}</div>
      {/* <label className="text-white text-left font-bold">Counters</label>
      <ul className="grid grid-cols-2 my-1 gap-2">
        {counters &&
          counters.map((counter, i) => (
            <li
              key={i}
              className="text-5xl text-white border-y odd:border-r even:border-l flex justify-around relative"
            >
              <button
                onClick={() => handleMinus(player, i)}
                className="z-10 absolute left-0 h-full w-1/2 opacity-0 active:opacity-30 active:bg-white"
              />
              <button
                onClick={() => actions.increment(player, i)}
                className="z-10 absolute right-0 h-full w-1/2 opacity-0 active:opacity-30 active:bg-white"
              />

              <span className="text-black opacity-10 text-4xl place-self-center">
                {"-"}
              </span>
              <span className="py-1">{counter}</span>
              <span className="text-black opacity-10 text-4xl place-self-center">
                {"+"}
              </span>
            </li>
          ))}

        <button
          onClick={() => actions.add(player)}
          className="text-white h-14 max-h-full w-full py-1 place-self-center first:col-span-2"
        >
          Add counter
        </button>
      </ul> */}
    </>
  );
};
