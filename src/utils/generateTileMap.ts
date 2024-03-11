import { TileType } from "../types/tile";

const generateTileMap = (X: number, Y: number) => {
  const arr = new Array(X).fill([]).map(() => {
    return new Array(Y).fill(null).map(
      () =>
        ({
          isOpened: false,
          isMined: false,
          isFlagged: false,
          isQuestioned: false,
          mineNearby: 0,
        } as TileType)
    );
  });

  return arr;
};

export default generateTileMap;
