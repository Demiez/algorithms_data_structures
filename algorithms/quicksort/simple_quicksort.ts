export class SimpleQuickSort {
  public static sort(arr: Array<number>): Array<number> {
    if (arr.length <= 2) {
      return this.checkArray(arr);
    }

    const randomIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[randomIndex];
    const lessArray = arr.filter((el) => el < pivot);
    const greaterArray = arr.filter((el) => el > pivot);
    return [...this.sort(lessArray), pivot, ...this.sort(greaterArray)];
  }

  private static checkArray(arr: Array<number>) {
    if (arr.length < 2) return arr;
    if (arr.length === 2 && arr[0] > arr[1]) return this.swap(arr, 0, 1);
    return arr;
  }

  private static swap(
    arr: Array<number>,
    position1: number,
    position2: number
  ) {
    [arr[position2], arr[position1]] = [arr[position1], arr[position2]];
    return arr;
  }
}
