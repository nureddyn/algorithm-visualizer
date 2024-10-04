import * as Plotly from 'plotly.js-dist';

export default function createPlot(divId:string, data: any[], layout:any) {
  return Plotly.newPlot('myDiv', data, layout);
}
