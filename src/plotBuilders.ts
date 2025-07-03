import * as Plotly from 'plotly.js-dist';
import NumberArray from './models/classes/Array';

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


export function updatePlot(arr: number[]) {
  
  const plotData = [{
    x: [...Array(arr.length).keys()],
    y: arr,
    type: 'bar',
  }];

  Plotly.react('myDiv', plotData);
  return {plotData};
}