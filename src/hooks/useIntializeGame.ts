import useLevelSwitch from "@/hooks/useLevelSwitch";
import { TileType } from "@/types/tile";

interface initializeProps {
  onSetTileMap: React.Dispatch<React.SetStateAction<TileType[][]>>;
  tileMapArr: TileType[][];
  colIndex: number;
  rowIndex: number;
}

const useIntializeGame = ({ tileMapArr, colIndex, rowIndex, onSetTileMap }: initializeProps) => {
  const { currentLevelStatus } = useLevelSwitch();
  const { MINE, X, Y } = currentLevelStatus;

  const GenRandomMineHandler = () => {
    const copy = [...tileMapArr];

    let mined = 0;
    const maxMineAmount = MINE;
    while (mined < maxMineAmount) {
      const randomY = Math.floor(Math.random() * Y);
      const randomX = Math.floor(Math.random() * X);

      const target = copy[randomY][randomX];
      if (
        randomY >= rowIndex - 1 && //
        randomY <= rowIndex + 1 &&
        randomX >= colIndex - 1 &&
        randomX <= colIndex + 1
      )
        continue;
      if (target?.isMined) continue;

      mined++;
      target.isMined = true;
      markNearbyAmount(randomX, randomY, copy);

      if (mined === maxMineAmount) break;
    }

    onSetTileMap(copy);
  };

  // 지뢰 기준 8방향에 숫자 +1 하는 함수
  const markNearbyAmount = (randomX: number, randomY: number, copy: TileType[][]) => {
    if (copy[randomY + 1]) {
      copy[randomY + 1][randomX].mineNearby++;
    }

    if (copy[randomY - 1]) {
      copy[randomY - 1][randomX].mineNearby++;
    }

    if (copy[randomY][randomX + 1]) {
      copy[randomY][randomX + 1].mineNearby++;
    }

    if (copy[randomY][randomX - 1]) {
      copy[randomY][randomX - 1].mineNearby++;
    }

    if (copy[randomY + 1] && copy[randomY + 1][randomX + 1]) {
      copy[randomY + 1][randomX + 1].mineNearby++;
    }

    if (copy[randomY + 1] && copy[randomY + 1][randomX - 1]) {
      copy[randomY + 1][randomX - 1].mineNearby++;
    }

    if (copy[randomY - 1] && copy[randomY - 1][randomX + 1]) {
      copy[randomY - 1][randomX + 1].mineNearby++;
    }

    if (copy[randomY - 1] && copy[randomY - 1][randomX - 1]) {
      copy[randomY - 1][randomX - 1].mineNearby++;
    }
  };

  return { GenRandomMineHandler };
};

export default useIntializeGame;
