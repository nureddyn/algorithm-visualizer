import algorithms from './algorithms.js';
import CustomArray from './models/classes/Array.js';

const arr: CustomArray<number> = new CustomArray([6,5,4,3,2,1]);
const len = arr.length;

// const result = algorithms.mergeSort({array: arr, length: len})
console.log(arr.arrayBody);
console.log(arr.executeSort());
