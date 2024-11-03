import algorithms from "./algorithms";
import { createPlot, updatePlot, runPlot, plotAlgorithm } from "./plotFunctions";
import NumberArray from "./models/classes/Array";
// import { after } from "node:test";

const selectionSort = algorithms.selectionSort;
// const insertionSort = algorithms.insertionSort;
// const mergeSort = algorithms.mergeSort;

// Mocking jest units
jest.mock('plotly.js-dist', () => ({
    react: jest.fn(),
    newPlot: jest.fn(),
}));

describe('createPlot function', () => {
    test('Even length array: 4 elements', () => {
        const arr = new NumberArray([4,3,2,1]);
        const { plotData } = createPlot(arr);
        expect(plotData[0].y).toEqual([4,3,2,1]);
    });

    test('Even length array: 6 elements', () => {
        const arr = new NumberArray([20,1,9,4,2,3]);
        const { plotData } = createPlot(arr);
        expect(plotData[0].y).toEqual([20,1,9,4,2,3])
    });
    // Fix
    test('Odd length array: 1 element', () => {
        const arr = new NumberArray([1]);
        const { plotData } = createPlot(arr);
        expect(plotData[0].y).toEqual([1])
    });

    test('Empty array', () => {
        const arr = new NumberArray([]);
        const { plotData } = createPlot(arr);
        expect(plotData[0].y).toEqual([])
    });
});


describe('updatePlot function', () => {
    test('Even length array: 4 elements', () => {
        const arr = new NumberArray([4,3,2,1]);
        const { plotData } = updatePlot(arr);
        expect(plotData[0].y).toEqual([4,3,2,1]);
    });

    test('Even length array: 6 elements', () => {
        const arr = new NumberArray([20,1,9,4,2,3]);
        const { plotData } = updatePlot(arr);
        expect(plotData[0].y).toEqual([20,1,9,4,2,3])
    });
    // Fix
    test('Odd length array: 1 element', () => {
        const arr = new NumberArray([1]);
        const { plotData } = updatePlot(arr);
        expect(plotData[0].y).toEqual([1])
    });

    test('Empty array', () => {
        const arr = new NumberArray([]);
        const { plotData } = updatePlot(arr);
        expect(plotData[0].y).toEqual([])
    });
});


// Mocking algorithms unit
// jest.mock('./algorithms', () => ({
//     selectionSort: jest.fn(),
// }));

// jest.mock('./plotFunctions', () => ({
//     ...jest.requireActual('./plotFunctions'),
//     runPlot: jest.fn(),
// }));

// describe('plotAlgorithm function', () => {
//     test('Test plot with selectionSort', () => {
//         const arr = [2, 1];
//         const expectedStateLog = [[1, 2]];

//         // Mock `selectionSort` behavior to modify `stateLog` as expected
//         (selectionSort as jest.Mock).mockImplementation((arr, _, stateLog) => {
//             stateLog.push(...expectedStateLog);
//         });

//         plotAlgorithm(arr);
//         // Not working
//         // expect(selectionSort).toHaveBeenCalledWith(arr, true, []);
//         // Not working
//         // expect(runPlot).toHaveBeenCalledWith(expectedStateLog);
//     });
// });

// describe("runPlot function", () => {
//     beforeAll(() => {
//         jest.useFakeTimers();
//     });
    
//     afterAll(() => {
//         jest.useRealTimers();
//     });
    
//     afterEach(() => {
//         jest.restoreAllMocks();
//     });

//     it("should call updatePlot for each entry in stateLog with 500ms intervals (mocked)", () => {
//         // Ensure we reference the correct path (maybe require is not correct??)
//         const mockUpdatePlot = jest.spyOn(require("./plotFunctions"), "updatePlot").mockImplementation(() => {
//             console.log("Mock updatePlot called");
//         });

//         const stateLog = [[1, 2], [3, 4]];


//         // Run the function with console logs
//         console.log("Starting runPlot");
//         runPlot(stateLog);

//         // Check that updatePlot is not called initially
//         expect(mockUpdatePlot).not.toHaveBeenCalled();

//         // Advance time by 500ms and check first call
//         jest.advanceTimersByTime(500);
//         expect(mockUpdatePlot).toHaveBeenCalledWith(stateLog[0]);

//         // Advance time by another 500ms and check second call
//         jest.advanceTimersByTime(500);
//         expect(mockUpdatePlot).toHaveBeenCalledWith(stateLog[1]);

//         // Check that updatePlot was called exactly twice
//         expect(mockUpdatePlot).toHaveBeenCalledTimes(2);
//     });
// });
