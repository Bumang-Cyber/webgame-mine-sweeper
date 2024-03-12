export interface TileType {
  id: string;

  // 왼쪽 클릭
  isOpened: boolean;
  isMined: boolean;

  // 오른쪽 클릭
  isStaled: boolean;
  isFlagged: boolean;
  isQuestioned: boolean;

  mineNearby: number;
}
