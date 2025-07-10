import { createPlot, updatePlot } from './plotBuilders';

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

export { createPlot };
