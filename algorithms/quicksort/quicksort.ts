import { SimpleQuickSort } from './simple_quicksort';
import * as utils from './utils';

const array = utils.fillArray(10);

const start = process.hrtime();
const sortedArray = SimpleQuickSort.sort(array);
const end = process.hrtime(start);

utils.displayArray(sortedArray);
utils.displayExecTime(end);
