import { TileType } from "@/types/tile";
import { Queue } from "./queue";

const detectByBfs = (Y: number, X: number, tileMapArr: TileType[][]) => {
  const queue = new Queue();

  tileMapArr[Y][X].isQuestioned = false;
  queue.enqueue([Y, X]);
  while (queue.getLength() !== 0) {
    const cur = queue.dequeue();
    if (!cur) return;

    const [curY, curX] = cur;

    tileMapArr[curY][curX].isOpened = true;
    if (tileMapArr[curY][curX].mineNearby > 0) return;

    for (const nxt of [
      [curY - 1, curX],
      [curY + 1, curX],
      [curY, curX - 1],
      [curY, curX + 1],
      [curY - 1, curX - 1],
      [curY - 1, curX + 1],
      [curY + 1, curX - 1],
      [curY + 1, curX + 1],
    ]) {
      if (
        tileMapArr[nxt[0]] !== undefined && //
        tileMapArr[nxt[0]][nxt[1]] !== undefined &&
        tileMapArr[nxt[0]][nxt[1]].isMined === false &&
        tileMapArr[nxt[0]][nxt[1]].isOpened === false
      ) {
        tileMapArr[nxt[0]][nxt[1]].isOpened = true;
        if (tileMapArr[nxt[0]][nxt[1]].mineNearby === 0) {
          queue.enqueue(nxt as number[]);
        }
      }
    }
  }

  return;
};

export default detectByBfs;
