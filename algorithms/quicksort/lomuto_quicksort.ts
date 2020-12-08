export class LomutoQuickSort {
  public array: Array<number>;
  private length: number;
  private sorted: boolean = false;

  constructor(arr: Array<number>) {
    this.array = arr;
    this.length = arr.length;
  }

  public sort(): void {
    this.checkArray();

    if (!this.sorted) {
      console.info('...performing Lomuto sorting');
    }
  }

  private checkArray(): void {
    if (this.length < 2) {
      this.sorted = true;
      return;
    }
    if (this.length === 2 && this.array[0] > this.array[1]) {
      this.swap(0, 1);
      this.sorted = true;
    }
    return;
  }

  private swap(position1: number, position2: number) {
    [this.array[position2], this.array[position1]] = [
      this.array[position1],
      this.array[position2],
    ];
  }
}
