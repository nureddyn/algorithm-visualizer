import algorithms from "../src/algorithms";

// const selectionSort = algorithms.selectionSort;
// const insertionSort = algorithms.insertionSort;
const mergeSort = algorithms.mergeSort;

// // Mocking jest units
// jest.mock('plotly.js-dist', () => ({
//     react: jest.fn(),
//     newPlot: jest.fn(),
// }));

// describe('Selection Sort', () => {
//     test('Even length array: 4 elements', () => {
//         expect(selectionSort([4,3,2,1], false, [])).toEqual([1,2,3,4]);
//     });

//     test('Even length array: 6 elements', () => {
//         expect(selectionSort([20,1,9,4,2,3], false, [])).toEqual([1,2,3,4,9,20])
//     });

//     test('Odd length array: 5 elements', () => {
//         expect(selectionSort([1,9,4,2,3], false, [])).toEqual([1,2,3,4,9])
//     });

//     test('Odd length array: 1 element', () => {
//         expect(selectionSort([1], false, [])).toEqual([1])
//     });

//     test('Empty array', () => {
//         expect(selectionSort([], false, [])).toEqual([])
//     });
// });

// describe('Insertion Sort', () => {
//     test('Even length array: 4 elements', () => {
//         expect(insertionSort([4,3,2,1], false, [])).toEqual([1,2,3,4]);
//     });

//     test('Even length array: 6 elements', () => {
//         expect(insertionSort([20,1,9,4,2,3], false, [])).toEqual([1,2,3,4,9,20])
//     });

//     test('Odd length array: 5 elements', () => {
//         expect(insertionSort([1,9,4,2,3], false, [])).toEqual([1,2,3,4,9])
//     });

//     test('Odd length array: 1 element', () => {
//         expect(insertionSort([1], false, [])).toEqual([1])
//     });

//     test('Empty array', () => {
//         expect(insertionSort([], false, [])).toEqual([])
//     });
// });


describe('Merge Sort', () => {
    test('Even length array: 4 elements', () => {
        expect(mergeSort([4,3,2,1], false, [])).toEqual([1,2,3,4]);
    });

    test('Even length array: 6 elements', () => {
        expect(mergeSort([20,1,9,4,2,3], false, [])).toEqual([1,2,3,4,9,20])
    });

    test('Odd length array: 5 elements', () => {
        expect(mergeSort([1,9,4,2,3], false, [])).toEqual([1,2,3,4,9])
    });

    test('Odd length array: 1 element', () => {
        expect(mergeSort([1], false, [])).toEqual([1])
    });

    test('Empty array', () => {
        expect(mergeSort([], false, [])).toEqual([])
    });
});
