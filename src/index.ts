import { randomBytes } from 'crypto';
import NumberArray from './models/classes/Array';
import { createPlot } from './runPlot';
import * as Plotly from 'plotly.js-dist';

let arr2 = [];
for (let i = 0; i < 200; i++) {
  let min = Math.ceil(1);
  let max = Math.floor(200);
  arr2.push(Math.floor(Math.random() * (max - min + 1)) + min);
}
console.log(arr2);
const arr: NumberArray = new NumberArray(arr2);
const len = arr.length;


const { plotData, layout } = createPlot(arr);

Plotly.newPlot('myDiv', plotData, layout)

const executeButton =  document.getElementById('execute');

if (executeButton) {
  executeButton.onclick = () => {
    // Choose between selectionSort, insertionSort, and mergeSort
    arr.executeSort({algorithm: 'mergeSort'});
  };
}

console.log('Sorted array:', arr);