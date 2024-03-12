export interface TileType {
  id: string;
  isOpened: boolean;
  isMined: boolean;
  isFlagged: boolean;
  isQuestioned: boolean;
  mineNearby: number;
}
