import { runPlot } from "./runPlot";
import { algorithmOptions } from "./models/listOfAlgorithms";

export function plotAlgorithm(arr: Array<number>, algorithm: string) {
  let stateLog: number[][] = [arr];
  // Run sort algorithm and update stateLog
  if (algorithm in algorithmOptions) {
    algorithmOptions[algorithm as keyof typeof algorithmOptions](arr, true, stateLog);
  }

  // Run plot function with updated stateLog
  runPlot(stateLog);
}
