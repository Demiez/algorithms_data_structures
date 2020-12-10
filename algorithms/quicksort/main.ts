import { SimpleQuickSort } from './simple_quicksort';
import { LomutoQuickSort } from './lomuto_quicksort';
import { HoareQuickSort } from './hoare_quicksort';
import * as utils from './utils';

const array = utils.fillArray(10000);
const lomutoSort = new LomutoQuickSort(array);
const hoareSort = new HoareQuickSort(array);

const startLomuto = process.hrtime();
lomutoSort.sort();
const endLomuto = process.hrtime(startLomuto);

const startHoare = process.hrtime();
hoareSort.sort();
const endHoare = process.hrtime(startHoare);

const startRandomPivot = process.hrtime();
const sortedWithRandomPivotArray = SimpleQuickSort.sort(array);
const endRandomPivot = process.hrtime(startRandomPivot);

// utils.displayArray(sortedWithRandomPivotArray);
// utils.displayArray(lomutoSort.array);
// utils.displayArray(hoareSort.array);

console.info(`Number of elements: ${array.length}`);
utils.displayExecTime(endLomuto, `lomuto partition`);
utils.displayExecTime(endHoare, `hoare's partition`);
utils.displayExecTime(endRandomPivot, 'random partition');
