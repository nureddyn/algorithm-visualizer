import NumberArray from './models/classes/Array';
import { createPlot } from './plotFunctions';
import * as Plotly from 'plotly.js-dist';

const arr: NumberArray = new NumberArray([6,5,4,3,2,1]);
const len = arr.length;


const { plotData, layout } = createPlot(arr);

Plotly.newPlot('myDiv', plotData, layout)

const executeButton =  document.getElementById('execute');

if (executeButton) {
  executeButton.onclick = () => {
    // Choose between selectionSort, insertionSort, and mergeSort
    arr.executeSort({algorithm: 'insertionSort'});
  };
}

console.log('Sorted array:', arr);