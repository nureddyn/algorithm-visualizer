import * as Plotly from 'plotly.js-dist';
import NumberArray from './models/classes/Array';

type MyPlotData = {
  x: number[],
  y: number[],
  type: string,
  mode: string,
  name: string
};

type MyLayout = {
  title: string
}

export function createPlot(arr: NumberArray) {

  const plotData: MyPlotData[] = [
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
  
  const layout: MyLayout = {
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