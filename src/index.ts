import algorithms from './algorithms';
import NumberArray from './models/classes/Array';
import { createPlot } from './plotFunctions';

const arr: NumberArray = new NumberArray([6,5,4,3,2,1]);
const len = arr.length;

// const result = algorithms.mergeSort({array: arr, length: len})
// console.log(arr);
// console.log(arr.executeSort());

const data: any[] = [
    {
      // x is the index of each number
      x: [...Array(arr.length).keys()],
      // y is the value of each number
      y: arr.getValues(),
      type: 'bar',
      mode: 'lines+markers',
      name: 'Algorithm Output'
    },
  ];
  
  const layout: any = {
    title: 'Dynamic Plot',
  };


createPlot("myDiv", data, layout);


const executeButton =  document.getElementById('execute');

if (executeButton) {
  executeButton.onclick = () => {
    arr.executeSort();
  };
}

console.log('Sorted array:', arr);