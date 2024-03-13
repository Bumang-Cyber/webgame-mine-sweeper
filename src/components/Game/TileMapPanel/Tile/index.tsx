import styled from "styled-components";
import { TileType } from "@/types/tile";
import useTileSwitch from "@/hooks/useTileSwitch";

// icon
import { BiSolidBomb as BombIcon } from "react-icons/bi";
import { FaFlag as FlagIcon } from "react-icons/fa6";
import { FaQuestion as QuestionIcon } from "react-icons/fa";
import pickTileColor from "@/utils/pickTileColor";
import usePlayingSwitch from "@/hooks/usePlayingSwitch";

interface TileProps {
  tileMapArr: TileType[][];
  onSetTileMap: React.Dispatch<React.SetStateAction<TileType[][]>>;
  rowIndex: number;
  colIndex: number;
  item: TileType;
}

const Tile = ({ item, tileMapArr, onSetTileMap, rowIndex, colIndex }: TileProps) => {
  const { tileLeftClickHandler, tileRightClickHandler } = useTileSwitch({ item, tileMapArr, onSetTileMap, rowIndex, colIndex });
  const { isFlagged, isMined, isOpened, isQuestioned, mineNearby } = item;

  const { currentPlayingState } = usePlayingSwitch();

  const tileColor = pickTileColor(mineNearby);

  if (currentPlayingState === "gameOver" && isMined) {
    return (
      <TileContainer $color={tileColor} $isOpened={isOpened} onClick={tileLeftClickHandler} onContextMenu={tileRightClickHandler}>
        {<BombIcon className="icon" />}
      </TileContainer>
    );
  }

  if (isFlagged) {
    return (
      <TileContainer $color={tileColor} $isOpened={isOpened} onClick={tileLeftClickHandler} onContextMenu={tileRightClickHandler}>
        <FlagIcon className="icon" />
      </TileContainer>
    );
  }

  if (isQuestioned) {
    return (
      <TileContainer $color={tileColor} $isOpened={isOpened} onClick={tileLeftClickHandler} onContextMenu={tileRightClickHandler}>
        <QuestionIcon className="icon" />
      </TileContainer>
    );
  }

  if (isOpened && !isMined && mineNearby !== 0) {
    return (
      <TileContainer $color={tileColor} $isOpened={isOpened} onClick={tileLeftClickHandler} onContextMenu={tileRightClickHandler}>
        {mineNearby}
      </TileContainer>
    );
  }

  return <TileContainer $color={tileColor} $isOpened={isOpened} onClick={tileLeftClickHandler} onContextMenu={tileRightClickHandler}></TileContainer>;
};

export default Tile;

export const TileContainer = styled.td<{ $isOpened: boolean; $color: string }>`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  width: 16px;
  height: 16px;
  background-color: ${({ theme, $isOpened }) => ($isOpened ? theme.color.lightGray400 : theme.color.lightGray200)};

  font-size: 14px;
  color: ${({ $color, $isOpened }) => $isOpened && $color};

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme, $isOpened }) => $isOpened && theme.color.darkGray400};
  ${({ theme, $isOpened }) => !$isOpened && theme.borderOutset};

  // TODO: 마우스 우클릭 새로운 창 막기
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: ${({ theme, $isOpened }) => !$isOpened && theme.color.lightGray400};
  }

  .icon {
    color: black;
  }
`;
