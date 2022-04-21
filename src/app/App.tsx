import { TitleBar } from "./components/TitleBar";
import { PlayerCard } from "./components/PlayerCard";

function App() {
  return (
    <div className="grid md:bg-slate-50 h-screen w-screen">
      <div className="bg-black grid place-self-center md:h-3/4 h-screen md:w-96 w-screen select-none md:place-self-center md:shadow-xl">
        <PlayerCard playerIndex={1} />
        <TitleBar />
        <PlayerCard playerIndex={0} />
      </div>
    </div>
  );
}

export default App;
