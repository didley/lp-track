import { TitleBar } from "./components/TitleBar";
import { PlayerCard } from "./components/PlayerCard";
import { useLPTracker } from "./hooks/useLPTracker";
import { useCounters } from "./hooks/useCounters";
import { Player } from "types";

function App() {
  const [lpSelectors, lpActions] = useLPTracker();
  const [counters, counterActions] = useCounters();

  const players: Player[] = [
    { name: "Jack p1", number: 0, color: "red" },
    { name: "Jill p2", number: 1, color: "blue" },
  ];

  return (
    <div className="h-screen w-screen grid select-none">
      <PlayerCard
        player={players[1]}
        lastLpLog={lpSelectors.lastLog}
        lpActions={lpActions}
        counters={counters[1]}
        counterActions={counterActions}
      />
      <TitleBar gameName="YGO" format="Seed Duel" />
      <PlayerCard
        player={players[0]}
        lastLpLog={lpSelectors.lastLog}
        lpActions={lpActions}
        counters={counters[0]}
        counterActions={counterActions}
      />
    </div>
  );
}

export default App;
