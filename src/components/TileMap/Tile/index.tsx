import styled from "styled-components";
import { TileType } from "../../../types/tile";

interface TileProps {
  rowIndex: number;
  colIndex: number;
  item: TileType;
}

const Tile = ({ item, rowIndex, colIndex }: TileProps) => {
  return <TileContainer>{`<${rowIndex}&${colIndex}>`}</TileContainer>;
};

export default Tile;

export const TileContainer = styled.td`
  flex-grow: 1;
  border: 1px solid black;

  display: flex;
  justify-content: center;
  align-items: center;
`;
