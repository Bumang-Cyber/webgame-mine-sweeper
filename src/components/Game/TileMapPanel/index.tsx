import styled from "styled-components";
import { useEffect, useState } from "react";

import generateTileMap from "@utils/generateTileMap";
import Tile from "./Tile";

import useLevelSwitch from "@hooks/useLevelSwitch";
import usePlayingSwitch from "@/hooks/usePlayingSwitch";

const TileMapPanel = () => {
  const { currentLevelStatus, levelValues } = useLevelSwitch();
  const { currentPlayingState } = usePlayingSwitch();
  const { X, Y } = currentLevelStatus;
  console.log(levelValues);

  // TODO: 이 배열을 state화 하기
  const [tileMapArr, setTileMapArr] = useState(generateTileMap(X, Y));

  useEffect(() => {
    if (currentPlayingState === "stale") {
      setTileMapArr(generateTileMap(X, Y));
    }
  }, [currentPlayingState]);

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
