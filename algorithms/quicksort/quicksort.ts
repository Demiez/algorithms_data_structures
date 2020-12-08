import { SimpleQuickSort } from './simple_quicksort';
import { LomutoQuickSort } from './lomuto_quicksort';
import * as utils from './utils';

const lomutoSort = new LomutoQuickSort([2, 0, 1]);
lomutoSort.sort();
utils.displayArray(lomutoSort.array);

const array = utils.fillArray(10);

const start = process.hrtime();
const sortedArray = SimpleQuickSort.sort(array);
const end = process.hrtime(start);

utils.displayArray(sortedArray);
utils.displayExecTime(end);
