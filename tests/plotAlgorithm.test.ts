import { jest } from '@jest/globals';

// Mocks
jest.mock('../src/runPlot', () => ({
  __esModule: true,
  runPlot: jest.fn(),
}));

jest.mock('../src/algorithms', () => ({
  __esModule: true,
  default: {
    selectionSort: jest.fn((arr: number[], _?: unknown, stateLog?: number[][]) => {
      stateLog?.push([1, 2]);
    }),
  },
}));

// Import after mocking
import { plotAlgorithm } from '../src/plotAlgorithm';
import { runPlot } from '../src/runPlot';
import algorithms from '../src/algorithms';


test('plotAlgorithm should call selectionSort and runPlot correctly', () => {
  const input = [2, 1];

  plotAlgorithm(input, 'selectionSort');

  expect(algorithms.selectionSort).toHaveBeenCalledWith(input, true, expect.any(Array));
  expect(runPlot).toHaveBeenCalledWith([[2, 1], [1, 2]]);
});
