
function selectionSort(arr: Array<number>): Array<number> {    
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        let min_inx = i;
        for (let j = i+1; j < n; j++) {
            if (arr[j] < arr[min_inx]) min_inx = j;
        }
        if (min_inx != i) {
            let tmp = arr[i];
            arr[i] = arr[min_inx];
            arr[min_inx] = tmp;
        }
    }
    return arr;
};


function insertionSort(input: Array<number>): Array<number> {
    return input;
};


interface mergeSortArray {
    array: Array<number>;
    length: number;
}

function mergeSort(input: mergeSortArray): mergeSortArray {
    return {array: input.array, length: input.length}
};


export default {selectionSort, insertionSort, mergeSort};