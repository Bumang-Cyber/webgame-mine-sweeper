import styled from "styled-components";
import StatusPanel from "./StatusPanel";
import TileMapPanel from "./TileMapPanel";

const Game = () => {
  return (
    <GameContainer>
      <StatusPanel />
      <TileMapPanel />
    </GameContainer>
  );
};

export default Game;

export const GameContainer = styled.table`
  width: 100%;
  background-color: red;
  padding: 20px;
  gap: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
