export abstract class Basic {
  protected arr: number[];

  constructor(size: number) {
    this.arr = this.fillArray(size);
  }

  private fillArray(size: number): Array<number> {
    return [...Array(size)].map((_) => Math.ceil(Math.random() * size));
  }

  public printArray() {
    console.log(this.arr.join());
  }
}
