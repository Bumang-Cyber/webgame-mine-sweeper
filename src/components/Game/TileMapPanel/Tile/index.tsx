import styled from "styled-components";
import { TileType } from "@/types/tile";

interface TileProps {
  rowIndex: number;
  colIndex: number;
  item: TileType;
}

const Tile = ({ item, rowIndex, colIndex }: TileProps) => {
  item.isOpened;
  return <TileContainer>{`<${rowIndex}&${colIndex}>`}</TileContainer>;
};

export default Tile;

export const TileContainer = styled.td`
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.color.lightGray100};
  font-size: 4px;

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
