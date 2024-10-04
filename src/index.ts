import algorithms from './algorithms';
import NumberArray from './models/classes/Array';
import createPlot from './plot_test';

const arr: NumberArray = new NumberArray([6,5,4,3,2,1]);
const len = arr.length;

// const result = algorithms.mergeSort({array: arr, length: len})
console.log(arr);
console.log(arr.executeSort());

const data: any = [
    {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: 'scatter',
    },
  ];
  
  const layout: any = {
    title: 'Basic Plot',
  };
  

createPlot("myDiv", data, layout);