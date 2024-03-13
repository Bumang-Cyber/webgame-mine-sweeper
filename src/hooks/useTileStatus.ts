import { useMemo, useState } from "react";

import generateTileMap from "@utils/generateTileMap";
import useLevelSwitch from "@hooks/useLevelSwitch";
import usePlayingSwitch from "@/hooks/usePlayingSwitch";

const useTileStatus = () => {
  const { currentLevelStatus, currentLevel } = useLevelSwitch();
  const { currentPlayingState } = usePlayingSwitch();
  const { X, Y } = currentLevelStatus; // 현재 레벨의 X, Y값

  // 타일맵 생성
  const [tileMapArr, setTileMapArr] = useState(generateTileMap(X, Y));

  // 레벨 전환 시 타일맵 초기화
  useMemo(() => {
    if (currentPlayingState !== "stale") return;
    setTileMapArr(generateTileMap(X, Y));
    // eslint-disable-next-line
  }, [currentLevel, currentPlayingState]);

  return { tileMapArr, setTileMapArr };
};

export default useTileStatus;
