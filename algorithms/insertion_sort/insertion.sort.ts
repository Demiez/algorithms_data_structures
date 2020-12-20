import { Basic } from '../basic.class';

export class InsertionSort extends Basic {
  constructor(size: number) {
    super(size);
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
}
