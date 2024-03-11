import { useState } from "react";
import { type LevelKeyType } from "./types/level";

import Layout from "./components/Layout";
import Game from "./components/Game";
import Option from "./components/Option";

function App() {
  // TODO: currentLevel을 전역상태관리로 바꾸기
  const [currentLevel] = useState<LevelKeyType>("BEGINNER");

  return (
    <Layout>
      <Option />
      <Game />
    </Layout>
  );
}

export default App;
