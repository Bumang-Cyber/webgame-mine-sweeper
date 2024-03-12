import { TileType } from "@/types/tile";
import { useDispatch, useSelector } from "react-redux";
import usePlayingSwitch from "./usePlayingSwitch";

interface useTileSwitchProps {
  item: TileType;
  tileMapArr: TileType[][];
  onSetTileMap: React.Dispatch<React.SetStateAction<TileType[][]>>;
  rowIndex: number;
  colIndex: number;
}

const useTileSwitch = ({ item, tileMapArr, onSetTileMap, rowIndex, colIndex }: useTileSwitchProps) => {
  const dispatch = useDispatch();

  const { currentPlayingState, playingSwitchHandler } = usePlayingSwitch();

  const tileClickHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    if (
      currentPlayingState === "gameOver" || //
      currentPlayingState === "success" ||
      item.isOpened
    ) {
      return;
    }

    // if ( ){
    //   /* 오른쪽 클릭인지 */
    // } // 유틸함수로 또 뺄까?

    if (currentPlayingState === "stale") {
      playingSwitchHandler("playing");
    }

    // if () {
    //   return;
    // }
    const copy = [...tileMapArr];
    // TODO: 왼쪽, 오른쪽 버튼 구별하기
    // 만약 isOpened: true라면 제외하기
    // 만약 오른쪽이라면
    // - isStaled, isFlagged, isQuestioned 전환하기
    // 만약 왼쪽이라면
    // - isMined: true인가? => gameOver로 만들기, 지뢰 보이기
    // - bfsMineSearch(tileMapArr)
    // - - tileMapArr.slice해서 이걸로 bfs 수행하기
    // - - isOpened로 만들기
    copy[colIndex][rowIndex].isOpened = true;

    onSetTileMap(copy);
  };

  return { tileClickHandler };
};

export default useTileSwitch;
