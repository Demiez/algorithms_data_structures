export abstract class Basic {
  protected arr: number[];

  constructor(arr: Array<number>) {
    this.arr = arr;
  }

  public printArray() {
    console.log(this.arr.join());
  }
}
