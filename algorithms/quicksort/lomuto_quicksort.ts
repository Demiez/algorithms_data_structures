export class LomutoQuickSort {
  public array: Array<number>;
  private sorted: boolean = false;

  constructor(arr: Array<number>) {
    this.array = arr;
  }

  public sort(): void {
    if (this.array.length <= 2) {
      this.checkArray(this.array);
      this.sorted = true;
    }

    if (!this.sorted) {
      console.info('...performing Lomuto sorting');
    }
  }

  private checkArray(arr: Array<number>) {
    if (arr.length < 2) return arr;
    if (arr.length === 2 && arr[0] > arr[1]) return this.swap(0, 1);
    return arr;
  }

  private swap(position1: number, position2: number) {
    [this.array[position2], this.array[position1]] = [
      this.array[position1],
      this.array[position2],
    ];
  }
}
