export {};

class MergeInsertSort {
  K: number = 64; // use insertion sort if size <= K
  public a: Array<number>;

  constructor(size: number) {
    this.a = this.fillArray(size);
  }

  private fillArray(size: number): Array<number> {
    return [...Array(size)].map((_) => Math.ceil(Math.random() * size));
  }

  private swap(i: number, j: number): void {
    [this.a[j], this.a[i]] = [this.a[i], this.a[j]];
  }

  // a[w:] = merged a[i:m]+a[j:n]
  // a[i:] = reordered a[w:]
  private wMerge(i: number, m: number, j: number, n: number, w: number): void {
    while (i < m && j < n) {
      this.swap(w++, this.a[i] < this.a[j] ? i++ : j++);
    }

    while (i < m) {
      this.swap(w++, i++);
    }

    while (j < n) {
      this.swap(w++, j++);
    }
  }

  // a[w:]  = sorted    a[b:e]
  // a[b:e] = reordered a[w:]
  private wSort(b: number, e: number, w: number) {
    let m: number;
    if (e - b > 1) {
      m = b + (e - b) / 2;
      this.imSort(b, m);
      this.imSort(m, e);
      this.wMerge(b, m, m, e, w);
    } else {
      while (b < e) {
        this.swap(b++, w++);
      }
    }
  }

  // inplace merge sort a[b:e]
  public imSort(b: number, e: number) {
    let m: number;
    let n: number;
    let w: number;
    let x: number;
    let t: number;
    // if <= K elements, use insertion sort
    if (e - b <= this.K) {
      for (n = b + 1; n < e; n++) {
        t = this.a[n];
        m = n - 1;
        while (m >= b && this.a[m] > t) {
          this.a[m + 1] = this.a[m];
          m--;
        }
        this.a[m + 1] = t;
      }
      return;
    }
    if (e - b > 1) {
      // split a[b:e]
      m = b + (e - b) / 2;
      w = b + e - m;
      // wSort -> a[w:e] = sorted    a[b:m]
      //          a[b:m] = reordered a[w:e]
      this.wSort(b, m, w);
      while (w - b > 2) {
        // split a[b:w], w = new mid point
        n = w;
        w = b + (n - b + 1) / 2;
        x = b + n - w;
        // wSort -> a[b:x] = sorted    a[w:n]
        //          a[w:n] = reordered a[b:x]
        this.wSort(w, n, b);
        // wMerge -> a[w:e] = merged    a[b:x]+a[n:e]
        //           a[b:x] = reordered a[w:n]
        this.wMerge(b, x, n, e, w);
      }
      // insert a[b:w] into a[b:e] using left shift
      for (n = w; n > b; --n) {
        t = this.a[n - 1];
        for (m = n; m < e && this.a[m] < t; ++m) {
          this.a[m - 1] = this.a[m];
        }
        this.a[m - 1] = t;
      }
    }
  }

  public print(): void {
    this.a.forEach((item, i) => {
      if (this.a[i - 1] > this.a[i]) {
        console.info('FAILED');
      }
      console.info(item);
    });
  }
}

const sort = new MergeInsertSort(64);
const start = process.hrtime();
sort.imSort(0, sort.a.length);
const end = process.hrtime(start);
sort.print();
console.info('Execution time: %dms', end[1] / 1000000);
