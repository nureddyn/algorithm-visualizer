import algorithms from "./algorithms";

const selectionSort = algorithms.selectionSort;
const insertionSort = algorithms.insertionSort;
const mergeSort = algorithms.mergeSort;

describe('Selection Sort', () => {
    test('sort [4,3,2,1] into [1,2,3,4]', () => {
        expect(selectionSort([4,3,2,1])).toEqual([1,2,3,4]);
        expect(selectionSort([20,1,9,4,2,3])).toEqual([1,2,3,4,9,20])
    });

    test('sort [20,1,9,4,2,3] into [1,2,3,4,9,20]', () => {
        expect(selectionSort([20,1,9,4,2,3])).toEqual([1,2,3,4,9,20])
    });
});

describe('Insertion Sort', () => {
    test('sort [4,3,2,1] into [1,2,3,4]', () => {
        expect(insertionSort([4,3,2,1])).toEqual([1,2,3,4]);
        expect(insertionSort([20,1,9,4,2,3])).toEqual([1,2,3,4,9,20])
    });

    test('sort [20,1,9,4,2,3] into [1,2,3,4,9,20]', () => {
        expect(insertionSort([20,1,9,4,2,3])).toEqual([1,2,3,4,9,20])
    });
});


describe('Merge Sort', () => {
    test('sort [4,3,2,1] into [1,2,3,4]', () => {
        expect(mergeSort([4,3,2,1])).toEqual([1,2,3,4]);
    });

    test('sort [20,1,9,4,2,3] into [1,2,3,4,9,20]', () => {
        expect(mergeSort([20,1,9,4,2,3])).toEqual([1,2,3,4,9,20])
    });
});

// function testSelectionSort() {
//     return 0;
// }