type Props = {
  gameName: string;
  format?: string;
};

export const TitleBar = ({ gameName, format }: Props) => {
  return (
    <div className="bg-black text-white flex h-full w-full text-center items-center">
      <div className="h-full w-20 grid flex-none">
        <button>Undo</button>
        <button>Reset</button>
      </div>
      <div className="h-full grid grow">
        <h1 className="text-xl text-white m-auto flex-none">
          {gameName} - {format}
        </h1>
      </div>
      <button className="w-20">Menu</button>
    </div>
  );
};
