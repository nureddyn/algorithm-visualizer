import algorithms from './algorithms';
import NumberArray from './models/classes/Array';

const arr: NumberArray = new NumberArray([6,5,4,3,2,1]);
const len = arr.length;

// const result = algorithms.mergeSort({array: arr, length: len})
console.log(arr);
console.log(arr.executeSort());
