import * as plotBuilders from '../src/plotBuilders'
import * as plotFunctions from '../src/runPlot';
import NumberArray from "../src/models/classes/Array";


// Mocking jest units
jest.mock('plotly.js-dist', () => ({
    react: jest.fn(),
    newPlot: jest.fn(),
}));

describe('createPlot function', () => {
    test('Even length array: 4 elements', () => {
        const arr = new NumberArray([4,3,2,1]);
        const { plotData } = plotBuilders.createPlot(arr);
        expect(plotData[0].x).toEqual([0,1,2,3]);
        expect(plotData[0].y).toEqual([4,3,2,1]);
    });

    test('Even length array: 6 elements', () => {
        const arr = new NumberArray([20,1,9,4,2,3]);
        const { plotData } = plotBuilders.createPlot(arr);
        expect(plotData[0].x).toEqual([0,1,2,3,4,5]);
        expect(plotData[0].y).toEqual([20,1,9,4,2,3])
    });
    // Fix
    test('Odd length array: 1 element', () => {
        const arr = new NumberArray([1]);
        const { plotData } = plotBuilders.createPlot(arr);
        expect(plotData[0].x).toEqual([0]);
        expect(plotData[0].y).toEqual([1])
    });

    test('Empty array', () => {
        const arr = new NumberArray([]);
        const { plotData } = plotBuilders.createPlot(arr);
        expect(plotData[0].x).toEqual([]);
        expect(plotData[0].y).toEqual([])
    });
});


describe('updatePlot function', () => {
    test('Even length array: 4 elements', () => {
        const arr = new NumberArray([8,12,13,2]);
        const { plotData } = plotBuilders.updatePlot(arr);
        expect(plotData[0].x).toEqual([0,1,2,3]);
        expect(plotData[0].y).toEqual([8,12,13,2]);
    });

    test('Even length array: 6 elements', () => {
        const arr = new NumberArray([45,3,9,70,4,67]);
        const { plotData } = plotBuilders.updatePlot(arr);
        expect(plotData[0].x).toEqual([0,1,2,3,4,5]);
        expect(plotData[0].y).toEqual([45,3,9,70,4,67])
    });
    // Fix
    test('Odd length array: 1 element', () => {
        const arr = new NumberArray([5]);
        const { plotData } = plotBuilders.updatePlot(arr);
        expect(plotData[0].x).toEqual([0]);
        expect(plotData[0].y).toEqual([5])
    });

    test('Empty array', () => {
        const arr = new NumberArray([]);
        const { plotData } = plotBuilders.updatePlot(arr);
        expect(plotData[0].x).toEqual([]);
        expect(plotData[0].y).toEqual([])
    });
});


describe('runPlot', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks(); // Restore original implementations
  });

  it('should call updatePlot with each entry in stateLog at 50ms intervals', () => {
    const stateLog = [[1], [2], [3]];

    const updatePlotSpy = jest
  .spyOn(plotBuilders, 'updatePlot')
  .mockImplementation(() => ({
    plotData: [
      {
        x: [],
        y: [],
        type: 'scatter',
      },
    ],
  }));

    plotFunctions.runPlot(stateLog);

    jest.advanceTimersByTime(0);

    expect(updatePlotSpy).toHaveBeenCalledTimes(1);
    expect(updatePlotSpy).toHaveBeenCalledWith([1]);

    jest.advanceTimersByTime(50);
    expect(updatePlotSpy).toHaveBeenCalledTimes(2);
    expect(updatePlotSpy).toHaveBeenCalledWith([2]);

    jest.advanceTimersByTime(50);
    expect(updatePlotSpy).toHaveBeenCalledTimes(3);
    expect(updatePlotSpy).toHaveBeenCalledWith([3]);

    jest.advanceTimersByTime(50);
    expect(updatePlotSpy).toHaveBeenCalledTimes(3);
  });
});
