import { runPlot, updatePlot } from './plotFunctions';

function selectionSort(arr: Array<number>, toPlot=false, stateLog: number[][]) {
    let n = arr.length;
    if (toPlot) stateLog.push([...arr]);  // <<<--- Add the first unsorted array to stateLog?

    if (n <= 1) return arr;

    for (let i = 0; i < n-1; i++) {
        let min_inx = i;
        for (let j = i+1; j < n; j++) {
            if (arr[j] < arr[min_inx]) min_inx = j;
        }
        if (min_inx != i) {
            let tmp = arr[i];
            arr[i] = arr[min_inx];
            arr[min_inx] = tmp;

            if (toPlot) stateLog.push([...arr]);
        }
    }
    return arr;
};


function insertionSort(arr: Array<number>, toPlot=false, stateLog: number[][]) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let j = i - 1;
        let k = arr[i];
        while (j > -1 && arr[j] > k) {
            arr[j+1] = arr[j];
            j--;

            if (toPlot) stateLog.push([...arr]);
        }
        arr[j+1] = k

        if (toPlot) stateLog.push([...arr]);
    }
    return arr;
};


// This approach does not allow to plot all the elements in the array at every state.
// Consider modify it, by passing the original array at any recursive call
function mergeSort(arr: Array<number>, toPlot=false, stateLog: number[][]): Array<number> {
    let n = arr.length;
    if (n == 1 || n == 0) return arr;

    let a = toPlot ?
    mergeSort(arr.slice(0,(n/2)), true, stateLog) :
    mergeSort(arr.slice(0,(n/2)), false, stateLog);

    let b = toPlot ?
    mergeSort(arr.slice(n/2, n), true, stateLog) :
    mergeSort(arr.slice(n/2, n), true, stateLog);
    
    let m = n/2;
    let i = 0, j = 0;
    let result = [];
    while (i < m && j < m) {
        if (a[i] <= b[j]) {
            result.push(a[i]);
            i++;
        } else {
            result.push(b[j]);
            j++;
        }
    }
    if (i < m) {
        for (let k = i; k < m; k++) {
            result.push(a[k]);
        }
    } else if (j < m) {
        for (let l = j; l < m; l++) {
            result.push(b[j]);
        }
    }
    if (toPlot) stateLog.push([...result]);
    return result;
};

export default {selectionSort, insertionSort, mergeSort};
