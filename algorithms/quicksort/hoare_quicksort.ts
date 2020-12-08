export class HoareQuickSort {
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
      this.quickSort(0, this.length - 1);
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

  private partition(lowIndex: number, highIndex: number): number {
    const pivot = this.array[lowIndex];

    let smallerIndex = lowIndex - 1;
    let greaterIndex = highIndex + 1;

    while (true) {
      do {
        smallerIndex++;
      } while (this.array[smallerIndex] < pivot);

      do {
        greaterIndex--;
      } while (this.array[greaterIndex] > pivot);

      if (smallerIndex >= greaterIndex) return greaterIndex;

      this.swap(smallerIndex, greaterIndex);
    }
  }

  private quickSort(low: number, high: number) {
    if (low < high) {
      const partitionIndex = this.partition(low, high);
      this.quickSort(low, partitionIndex);
      this.quickSort(partitionIndex + 1, high);
    }
  }
}
