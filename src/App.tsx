import { useState } from "react";
import Layout from "./components/Layout";
import { levels } from "./constants/level";
import { type LevelKeyType } from "./types/level";

import ControlPanel from "./components/ContorlPanel";
import TileMap from "./components/TileMap";

function App() {
  // TODO: currentLevel을 전역상태관리로 바꾸기
  const [currentLevel] = useState<LevelKeyType>("BEGINNER");
  const { screen } = levels[currentLevel];

  return (
    <Layout screen={screen}>
      <ControlPanel />
      <TileMap />
    </Layout>
  );
}

export default App;
