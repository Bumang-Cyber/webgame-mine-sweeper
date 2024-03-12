import styled from "styled-components";
import generateTileMap from "../../../utils/generateTileMap";

import Tile from "./Tile";
import useLevelSwitch from "../../../hooks/useLevelSwitch";

const TileMapPanel = () => {
  const { currentLevelStatus } = useLevelSwitch();
  console.log(currentLevelStatus, "currentLevelStatus");
  const { X, Y } = currentLevelStatus;

  const tileMapArr = generateTileMap(X, Y);
  console.log(tileMapArr);

  return (
    <TileMapContainer>
      {tileMapArr.map((row, rowIndex) => (
        <RowWrapper key={rowIndex}>
          {row.map((item, colIndex) => (
            <Tile rowIndex={rowIndex} colIndex={colIndex} key={`${rowIndex}&${colIndex}`} item={item} />
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
