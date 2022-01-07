type Props = {
  counters?: number[];
};

export const Counters = ({ counters }: Props) => {
  return (
    <>
      <label className="text-white text-left font-bold">Counters</label>
      <ul className="grid grid-cols-2 my-1 gap-2">
        {counters &&
          counters.map((counter, i) => (
            <li
              key={i}
              className="text-5xl text-white border-y odd:border-r even:border-l flex justify-around relative"
            >
              <button className="absolute left-0 h-full w-1/2 opacity-0 bg-white active:opacity-30 active:bg-white" />
              <button className="absolute right-0 h-full w-1/2 opacity-0 bg-white active:opacity-30 active:bg-white" />

              <span className="text-black opacity-10 text-4xl place-self-center">
                {"-"}
              </span>
              <span className="py-1">{counter}</span>
              <span className="text-black opacity-10 text-4xl place-self-center">
                {"+"}
              </span>
            </li>
          ))}

        <button className="text-white h-14 max-h-full w-full py-1 place-self-center first:col-span-2">
          Add counter
        </button>
      </ul>
    </>
  );
};
