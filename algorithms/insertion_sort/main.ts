import { InsertionSort } from './insertion.sort';
import { fillArray, displayExecTime } from '../../utils/utils';

const array = fillArray(1000000);

const array01 = new InsertionSort(array);
const array02 = new InsertionSort(array);
const array03 = new InsertionSort(array);

console.info(`Number of elements: ${array.length}`);

const startTimeNonRecursive = process.hrtime();
array01.sort();
const endTimeNonRecursive = process.hrtime(startTimeNonRecursive);
displayExecTime(endTimeNonRecursive, 'Insertion Sort - Non Recursive');

// Usual recursive won't work with large number of elements because of RangeError: Maximum call stack size exceeded
// On over 5000 elements the difference with RecursiveMax is small (about 0,2 - 1 ms)
// const startTimeRecursive = process.hrtime();
// array02.sortRecursive();
// const endTimeRecursive = process.hrtime(startTimeRecursive);
// displayExecTime(endTimeRecursive, 'Insertion Sort - Recursive');

const startTimeRecursiveMax = process.hrtime();
array03.sort();
const endTimeRecursiveMax = process.hrtime(startTimeRecursiveMax);
displayExecTime(endTimeRecursiveMax, 'Insertion Sort - Recursive Max');

// array02.printArray();
