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
  padding: 8px;
  gap: 8px;
  ${({ theme }) => theme.borderOutset}

  display: flex;
  flex-direction: column;
  align-items: center;
`;
