import styled from "styled-components";
import { useEffect, useMemo, useState } from "react";

import generateTileMap from "@utils/generateTileMap";
import Tile from "./Tile";

import useLevelSwitch from "@hooks/useLevelSwitch";
import usePlayingSwitch from "@/hooks/usePlayingSwitch";

const TileMapPanel = () => {
  const { currentLevelStatus, currentLevel } = useLevelSwitch();
  const { currentPlayingState } = usePlayingSwitch();
  const { X, Y } = currentLevelStatus;

  // TODO: 이 배열을 state화 하기
  const [tileMapArr, setTileMapArr] = useState(generateTileMap(X, Y));

  useMemo(() => {
    if (currentPlayingState !== "stale") return;
    setTileMapArr(generateTileMap(X, Y));
  }, [currentLevel, currentPlayingState]);

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
