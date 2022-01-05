import { TitleBar } from "./components/TitleBar";
import { PlayerCard } from "./components/PlayerCard";

function App() {
  return (
    <div className="h-screen w-screen grid select-none">
      <PlayerCard
        playerName={"greg p1"}
        color={"red"}
        lifePoints={20}
        counters={[9, 5, 0]}
      />
      <TitleBar gameName="YGO" format="Seed Duel" />
      <PlayerCard
        playerName={"steve p2"}
        color={"blue"}
        lifePoints={20}
        counters={[]}
      />
    </div>
  );
}

export default App;
