import * as Plotly from 'plotly.js-dist';

export function createPlot(divId:string, data: any[], layout:any) {
  return Plotly.newPlot('myDiv', data, layout);
}



export function updatePlot(arr: number[]): Promise<void> {
    
  return new Promise((resolve) => {
      Plotly.react('myDiv', [{
        x: [...Array(arr.length).keys()],
        y: arr,
        type: 'bar',
      }]);
  
      setTimeout(() => resolve(), 500);
    });
}
