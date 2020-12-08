export const fillArray = (size: number): Array<number> =>
  [...Array(size)].map((_) => Math.ceil(Math.random() * size));

export const displayArray = (arr: Array<number>): void =>
  console.log(arr.join());

export const displayExecTime = (
  time: Array<number>,
  sortingName: string = ''
): void =>
  console.info('Execution time %s: %dms', sortingName, time[1] / 1000000);
