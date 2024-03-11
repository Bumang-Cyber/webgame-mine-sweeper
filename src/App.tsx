import { useState } from "react";
import Layout from "./components/Layout";
import { levels, type LevelKey } from "./constants/level";

import ControlPanel from "./components/ContorlPanel";
import TileMap from "./components/TileMap";

function App() {
  const [level, setLevel] = useState<LevelKey>("BEGINNER");
  const { BEGINNER, INTERMEDIATE, EXPERT } = level;

  return (
    <Layout>
      <ControlPanel />
      <TileMap />
    </Layout>
  );
}

export default App;
