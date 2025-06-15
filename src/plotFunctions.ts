import * as Plotly from 'plotly.js-dist';
import NumberArray from './models/classes/Array';
import algorithms from './algorithms';
import { algorithmOptions } from './models/listOfAlgorithms';

// Test unit
export function createPlot(arr: NumberArray) {

  const plotData: any[] = [
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

  return {plotData, layout};

}


// Test unit
export function updatePlot(arr: number[]) {
  
  const plotData = [{
    x: [...Array(arr.length).keys()],
    y: arr,
    type: 'bar',
  }];

  Plotly.react('myDiv', plotData);
  return {plotData};
}


// Test unit (how to test a function that does not return anything?)
// Do I need to mock external functions? (updatePlot & setTimeout)
export function runPlot(stateLog: number[][]) {
  let i = 0;
  function nextStep() {
    if (i < stateLog.length) {
      updatePlot(stateLog[i])
      i++;
      setTimeout(nextStep, 50);
    }
  }
  nextStep();
  return stateLog;
}


export function plotAlgorithm(arr: Array<number>, algorithm: string) {
  let stateLog: number[][] = [arr];
  // Run sort algorithm and update stateLog
  if (algorithm in algorithmOptions) {
    algorithmOptions[algorithm as keyof typeof algorithmOptions](arr, true, stateLog);
  }

  // Run plot function with updated stateLog
  runPlot(stateLog);
}
