import { useState } from "react";
import styled from "styled-components";
import { type LevelKeyType } from "../../../types/level";
import generateTileMap from "../../../utils/generateTileMap";
import { levels } from "../../../constants/level";
import Tile from "./Tile";

const TileMapPanel = () => {
  const [currentLevel] = useState<LevelKeyType>("BEGINNER");
  const tileMapArr = generateTileMap(levels[currentLevel].X, levels[currentLevel].Y);
  console.log(tileMapArr);

  return (
    <TileMapContainer>
      {tileMapArr.map((row, rowIndex) => (
        <RowWrapper key={rowIndex}>
          {row.map((item, colIndex) => (
            <Tile rowIndex={rowIndex} colIndex={colIndex} key={`${rowIndex}${colIndex}`} item={item} />
          ))}
        </RowWrapper>
      ))}
    </TileMapContainer>
  );
};

export default TileMapPanel;

const TileMapContainer = styled.tbody`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.borderInset}
`;

const RowWrapper = styled.tr`
  display: flex;
`;
