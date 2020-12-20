import { InsertionSort } from './insertion.sort';
import { displayExecTime } from '../../utils/utils';

const arraySize = 100000;

const array01 = new InsertionSort(arraySize);

const startTime = process.hrtime();
array01.sort();
const endTime = process.hrtime(startTime);
displayExecTime(endTime, 'Insertion Sort');
// array01.printArray();
