import { Basic } from '../basic.class';

export class InsertionSort extends Basic {
  constructor(arr: Array<number>) {
    super(arr);
  }

  sort() {
    for (let i = 1; i < this.arr.length; ++i) {
      const key: number = this.arr[i];
      let j = i - 1;

      while (j >= 0 && this.arr[j] > key) {
        this.arr[j + 1] = this.arr[j];
        --j;
      }
      this.arr[j + 1] = key;
    }
  }

  sortRecursive(arr = this.arr, n = this.arr.length) {
    if (n <= 1) return;

    this.sortRecursive(arr, n - 1);

    const last = arr[n - 1];
    let j = n - 2;

    while (j >= 0 && arr[j] > last) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = last;
  }
}
