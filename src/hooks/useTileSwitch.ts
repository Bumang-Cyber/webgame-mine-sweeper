import { TileType } from "@/types/tile";
import usePlayingSwitch from "./usePlayingSwitch";
import useIntializeGame from "@/hooks/useIntializeGame";
import detectByBfs from "@/utils/detectByBfs";

import useSound from "@/hooks/useSound";

interface useTileSwitchProps {
  item: TileType;
  tileMapArr: TileType[][];
  onSetTileMap: React.Dispatch<React.SetStateAction<TileType[][]>>;
  rowIndex: number;
  colIndex: number;
}

const useTileSwitch = ({ item, tileMapArr, onSetTileMap, rowIndex, colIndex }: useTileSwitchProps) => {
  const { isFlagged, isMined, isQuestioned, isStaled } = item;
  const { isOpened } = item;

  const { currentPlayingState, playingSwitchHandler } = usePlayingSwitch();
  const { GenRandomMineHandler } = useIntializeGame({ tileMapArr, colIndex, rowIndex, onSetTileMap });

  const { playSoundHandler } = useSound();

  // 왼쪽 클릭
  const tileLeftClickHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    // 게임오버상태, 성공상태, 이미 열렸을 때, 깃발 상태일 때 이벤트 종료
    if (
      currentPlayingState === "gameOver" || //
      currentPlayingState === "success" ||
      isOpened ||
      isFlagged
    ) {
      return;
    }

    // stale이면 게임스타트
    if (currentPlayingState === "stale") {
      playingSwitchHandler("playing");
      GenRandomMineHandler();
    }

    const copy = [...tileMapArr];

    // 지뢰를 밟았을 때
    if (isMined) {
      playingSwitchHandler("gameOver");
      copy[rowIndex][colIndex].isOpened = true;
      onSetTileMap(copy);
      playSoundHandler("soundGameOver");
      return;
    }

    detectByBfs(rowIndex, colIndex, copy);
    onSetTileMap(copy);
    playSoundHandler("soundLeftClick");
  };

  // 오른쪽 클릭
  const tileRightClickHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    // 게임오버상태, 성공상태 혹은 이미 열렸을 때 이벤트 종료
    if (
      currentPlayingState === "gameOver" || //
      currentPlayingState === "success" ||
      currentPlayingState === "stale" ||
      isOpened
    ) {
      return;
    }

    const copy = [...tileMapArr];

    // isStaled, isFlagged, isQuestioned 전환하기
    if (isStaled) {
      copy[rowIndex][colIndex].isStaled = false;
      copy[rowIndex][colIndex].isFlagged = true;
      playSoundHandler("soundFlag");
    } else if (isFlagged) {
      copy[rowIndex][colIndex].isFlagged = false;
      copy[rowIndex][colIndex].isQuestioned = true;
      playSoundHandler("soundQuestion");
    } else if (isQuestioned) {
      copy[rowIndex][colIndex].isQuestioned = false;
      copy[rowIndex][colIndex].isStaled = true;
    }
    onSetTileMap(copy);

    console.log("오른쪽 클릭이지");
  };

  return { tileLeftClickHandler, tileRightClickHandler };
};

export default useTileSwitch;
