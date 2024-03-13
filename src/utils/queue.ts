export class Queue {
  private queueList: { [key: number]: number[] }; // 타입 명시
  private headIndex: number;
  private tailIndex: number;

  constructor() {
    this.queueList = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item: number[]) {
    this.queueList[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.queueList[this.headIndex];
    if (item === undefined) {
      console.error("Reference Error. No item to Delete");
      return false;
    }
    delete this.queueList[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.queueList[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
  reset() {
    for (let i = this.headIndex; i < this.tailIndex; i++) {
      delete this.queueList[i];
    }
    this.headIndex = 0;
    this.tailIndex = 0;
    return "Reset Done";
  }
  makeArr() {
    const objVals = Object.values(this.queueList);
    return objVals;
  }
  recent() {
    return this.queueList[this.tailIndex - 1];
  }
}
