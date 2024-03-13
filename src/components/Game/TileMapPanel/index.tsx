import styled from "styled-components";
import Tile from "./Tile";

import useTileStatus from "@/hooks/useTileStatus";
import useGoalStatus from "@/hooks/useGoalStatus";
import useGoalSwitch from "@/hooks/useGoalSwitch";

const TileMapPanel = () => {
  const { tileMapArr, setTileMapArr } = useTileStatus();
  useGoalStatus(tileMapArr);
  useGoalSwitch();

  return (
    <TileMapContainer>
      {tileMapArr.map((row, rowIndex) => (
        <RowWrapper key={rowIndex}>
          {row.map((item, colIndex) => (
            <Tile //
              tileMapArr={tileMapArr}
              onSetTileMap={setTileMapArr}
              rowIndex={rowIndex}
              colIndex={colIndex}
              key={`${rowIndex}&${colIndex}`}
              item={item}
            />
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
