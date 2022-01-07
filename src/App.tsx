import { TitleBar } from "./components/TitleBar";
import { PlayerCard } from "./components/PlayerCard";
import { useLPTracker } from "./hooks/useLPTracker";

function App() {
  const [lpSelectors, lpActions] = useLPTracker();

  return (
    <div className="h-screen w-screen grid select-none">
      <PlayerCard
        playerName={"greg p2"}
        playerNumber={1}
        color={"red"}
        lifePoints={lpSelectors.latestLp[1]}
        lpActions={lpActions}
        counters={[9, 5, 0]}
      />
      <TitleBar gameName="YGO" format="Seed Duel" />
      <PlayerCard
        playerName={"steve p1"}
        playerNumber={0}
        color={"blue"}
        lifePoints={lpSelectors.latestLp[0]}
        lpActions={lpActions}
        counters={[]}
      />
    </div>
  );
}

export default App;
