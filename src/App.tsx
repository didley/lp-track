import { TitleBar } from "./components/TitleBar";
import { PlayerCard } from "./components/PlayerCard";
import { Player, LpLogEntry } from "types";

function App() {
  const players: Player[] = [
    {
      name: "Blue",
      color: "red",
      cardRotation: 0,
      counters: [2, 4, 0, 0],
    },
    {
      name: "Jill",
      color: "blue",
      cardRotation: 0,
      counters: [2, 4, 0, 0],
    },
  ];

  const initLog: LpLogEntry[] = [
    [{ lp: 4000 }, { lp: 4000 }],
    [{ lp: 3900, change: -100 }, { lp: 4000 }],
    [{ lp: 3900, surrender: true }, { lp: 4000 }],
  ];

  return (
    <div className="h-screen w-screen grid select-none">
      <PlayerCard initPlayer={players[1]} playerIndex={1} initLog={initLog} />
      <TitleBar gameName="YGO" format="Seed Duel" />
      <PlayerCard initPlayer={players[0]} playerIndex={0} initLog={initLog} />
    </div>
  );
}

export default App;
