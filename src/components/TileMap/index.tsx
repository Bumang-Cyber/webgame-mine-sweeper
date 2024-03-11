import { useState } from "react";
import styled from "styled-components";
import { type LevelKeyType } from "../../types/level";
import generateTileMap from "../../utils/generateTileMap";
import { levels } from "../../constants/level";
import Tile from "./Tile";

const TileMap = () => {
  const [currentLevel] = useState<LevelKeyType>("BEGINNER");
  const tileMapArr = generateTileMap(levels[currentLevel].X, levels[currentLevel].Y);
  console.log(tileMapArr);

  return (
    <Container>
      {tileMapArr.map((row, rowIndex) => (
        <RowWrapper key={rowIndex}>
          {row.map((item, colIndex) => (
            <Tile rowIndex={rowIndex} colIndex={colIndex} key={`${rowIndex}${colIndex}`} item={item} />
          ))}
        </RowWrapper>
      ))}
    </Container>
  );
};

export default TileMap;

const Container = styled.tbody`
  //FIX: level에 따라 조건적으로 width가 바뀌게
  width: 100%;
  //FIX: level에 따라 조건적으로 height가 바뀌게
  height: 200px;
  background-color: blue;

  display: flex;
  flex-direction: column;
`;

const RowWrapper = styled.tr`
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  border: 1px solid black;

  display: flex;
`;
