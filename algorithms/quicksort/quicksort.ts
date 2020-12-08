import { SimpleQuickSort } from './simple_quicksort';
import { LomutoQuickSort } from './lomuto_quicksort';
import * as utils from './utils';

const array = utils.fillArray(1024 * 1024);
const lomutoSort = new LomutoQuickSort(array);

const startLomuto = process.hrtime();
lomutoSort.sort();
const endLomuto = process.hrtime(startLomuto);

const startRandomPivot = process.hrtime();
const sortedWithRandomPivotArray = SimpleQuickSort.sort(array);
const endRandomPivot = process.hrtime(startRandomPivot);

// utils.displayArray(sortedWithRandomPivotArray);
// utils.displayArray(lomutoSort.array);
console.info(`Number of elements: ${array.length}`);
utils.displayExecTime(endLomuto, `lomuto partition`);
utils.displayExecTime(endRandomPivot, 'random partition');
