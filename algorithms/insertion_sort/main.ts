import { InsertionSort } from './insertion.sort';
import { fillArray, displayExecTime } from '../../utils/utils';

const array = fillArray(8500);

const array01 = new InsertionSort(array);
const array02 = new InsertionSort(array);

const startTimeNonRecursive = process.hrtime();
array01.sort();
const endTimeNonRecursive = process.hrtime(startTimeNonRecursive);
displayExecTime(endTimeNonRecursive, 'Insertion Sort - Non Recursive');

const startTimeRecursive = process.hrtime();
array02.sortRecursive();
const endTimeRecursive = process.hrtime(startTimeRecursive);
// array02.printArray();
displayExecTime(endTimeRecursive, 'Insertion Sort - Recursive');
