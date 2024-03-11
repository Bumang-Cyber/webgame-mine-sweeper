import styled from "styled-components";
import { TileType } from "../../../../types/tile";

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
  width: 24px;
  height: 24px;
  border: 1px solid black;

  display: flex;
  justify-content: center;
  align-items: center;
`;
