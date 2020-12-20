import { InsertionSort } from './insertion.sort';
import { displayExecTime } from '../../utils/utils';

const arraySize = 100;

const array01 = new InsertionSort(arraySize);
const array02 = new InsertionSort(arraySize);

// const startTime = process.hrtime();
// array01.sort();
// const endTime = process.hrtime(startTime);
// displayExecTime(endTime, 'Insertion Sort');

array02.sortRecursive();
array02.printArray();
