import styled from "styled-components";
import { TileType } from "@/types/tile";
import useTileSwitch from "@/hooks/useTileSwitch";

// icon
import { BiSolidBomb as BombIcon } from "react-icons/bi";
import { FaExplosion as BoomIcon } from "react-icons/fa6";
import { FaFlag as FlagIcon } from "react-icons/fa6";
import { FaQuestion as QuestionIcon } from "react-icons/fa";

interface TileProps {
  tileMapArr: TileType[][];
  onSetTileMap: React.Dispatch<React.SetStateAction<TileType[][]>>;
  rowIndex: number;
  colIndex: number;
  item: TileType;
}

const Tile = ({ item, tileMapArr, onSetTileMap, rowIndex, colIndex }: TileProps) => {
  const { tileLeftClickHandler, tileRightClickHandler } = useTileSwitch({ item, tileMapArr, onSetTileMap, rowIndex, colIndex });
  const { isFlagged, isMined, isOpened, isQuestioned } = item;

  return (
    <TileContainer onClick={tileLeftClickHandler} onContextMenu={tileRightClickHandler}>
      {isFlagged && <FlagIcon />}
      {isQuestioned && <QuestionIcon />}
      {isMined && isOpened && <BombIcon />}
    </TileContainer>
  );
};

export default Tile;

export const TileContainer = styled.td`
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.color.lightGray100};
  font-size: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.borderOutset};

  // TODO: 마우스 우클릭 새로운 창 막기
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.color.lightGray400};
  }
`;
