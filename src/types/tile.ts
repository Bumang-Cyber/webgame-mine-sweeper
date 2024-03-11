export interface TileType {
  isOpened: boolean;
  isMined: boolean;
  isFlagged: boolean;
  isQuestioned: boolean;
  mineNearby: number;
}
