// Mocks
jest.mock('../src/runPlot', () => ({
  __esModule: true,
  runPlot: jest.fn(),
}));

jest.mock('../src/algorithms', () => ({
  __esModule: true,
  default: {
    selectionSort: jest.fn((arr, _, stateLog) => {
      stateLog.push([1, 2]);
    }),
  },
}));

// Import after mocking
const { plotAlgorithm } = require('../src/plotAlgorithm');
const { runPlot } = require('../src/runPlot');
const algorithms = require('../src/algorithms').default;

test('plotAlgorithm should call selectionSort and runPlot correctly', () => {
  const input = [2, 1];

  plotAlgorithm(input, 'selectionSort');

  expect(algorithms.selectionSort).toHaveBeenCalledWith(input, true, expect.any(Array));
  expect(runPlot).toHaveBeenCalledWith([[2, 1], [1, 2]]);
});
