import { TileType } from "@/types/tile";
import { useDispatch, useSelector } from "react-redux";

const useTileSwitch = (item: TileType) => {
  const dispatch = useDispatch();

  const tileClickHandler = () => {
    // TODO: 왼쪽, 오른쪽 버튼 구별하기
    // 만약 isOpened: true라면 제외하기
    // 만약 오른쪽이라면
    // - isStaled, isFlagged, isQuestioned 전환하기
    // 만약 왼쪽이라면
    // - isMined: true인가? => gameOver로 만들기, 지뢰 보이기
    // - isOpened로 만들기
    // - bfsMineSearch(tileMapArr)
    // - - - - - tileMapArr.slice해서 이걸로 bfs 수행하기
  };

  return { tileClickHandler };
};

export default useTileSwitch;
