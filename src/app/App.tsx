import { TitleBar } from "./components/TitleBar";
import { PlayerCard } from "./components/PlayerCard";

function App() {
  return (
    <div className="h-screen w-screen grid select-none">
      <PlayerCard playerIndex={1} />
      <TitleBar />
      <PlayerCard playerIndex={0} />
    </div>
  );
}

export default App;
