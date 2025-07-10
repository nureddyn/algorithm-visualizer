import NumberArray from './models/classes/Array';
import { createPlot } from './runPlot';
import * as Plotly from 'plotly.js-dist';

const arr2 = [];
for (let i = 0; i < 200; i++) {
  const min = Math.ceil(1);
  const max = Math.floor(200);
  arr2.push(Math.floor(Math.random() * (max - min + 1)) + min);
}
console.log(arr2);
const arr: NumberArray = new NumberArray(arr2);


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