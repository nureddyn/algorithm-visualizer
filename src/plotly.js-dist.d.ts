import { extendTraces } from "plotly.js";

declare module 'plotly.js-dist' {
    // Define the structure for the data type
    interface Data {
      x: number[];
      y: number[];
      type: string;
      [key: string]: any; // Allow additional properties
    }
  
    // Define the structure for the layout type
    interface Layout {
      title?: string;
      [key: string]: any; // Allow additional properties
    }
  
    // Export the Plotly object directly with the method
    export function newPlot(
      divId: string | HTMLElement,
      data: Data[],
      layout?: Layout
    ): void;

    export function extendTraces(
      divId: string | HTMLElement,
      steps: number[][],
      layout?: Layout
    ): void;

    export function react(
      divId: string | HTMLElement,
      data: Data[],
      layout?: Layout,
      config?: any // Allow additional configuration
    ): void;
  }
  