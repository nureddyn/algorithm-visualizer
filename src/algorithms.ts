
function selectionSort(arr: Array<number>, toPlot=false, stateLog: number[][]) {
    const n = arr.length;
    if (toPlot) stateLog.push([...arr]);  // <<<--- Add the first unsorted array to stateLog?

    if (n <= 1) return arr;

    for (let i = 0; i < n-1; i++) {
        let min_inx = i;
        for (let j = i+1; j < n; j++) {
            if (arr[j] < arr[min_inx]) min_inx = j;
        }
        if (min_inx != i) {
            const tmp = arr[i];
            arr[i] = arr[min_inx];
            arr[min_inx] = tmp;

            if (toPlot) stateLog.push([...arr]);
        }
    }
    return arr;
};


function insertionSort(arr: Array<number>, toPlot=false, stateLog: number[][]) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let j = i - 1;
        const k = arr[i];
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
// Consider modify it, by passing the currentArray array at any recursive call, and the element index of the currentArray sub-array 
function mergeSort(arr: Array<number>, toPlot=false, stateLog: number[][]): Array<number> {
    let currentArray: Array<number> = arr;

    function mergeSortImplementation(arr: Array<number>, toPlot=false, stateLog: number[][], side: string=""): Array<number> {
        const n = arr.length;
        if (n == 1 || n == 0) return arr;

        let a = arr.slice(0,(n/2));
        a = toPlot ?
        mergeSortImplementation(a, true, stateLog, "left") :
        mergeSortImplementation(a, false, stateLog, "left");

        let b = arr.slice(n/2, n);
        b = toPlot ?
        mergeSortImplementation(b, true, stateLog, "right") :
        mergeSortImplementation(b, true, stateLog, "right");
        
        const m = n/2;
        let i = 0, j = 0;
        const result = [];
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
        const concatIndex = result.length;
        // Concatenate result subarray
        if (side == "left" || side == "") {
            currentArray = result.concat(currentArray.slice(concatIndex))
        } 
        else if (side == "right") {
            currentArray = currentArray.slice(0,currentArray.length-concatIndex).concat(result)
        }
        if (toPlot) stateLog.push([...currentArray]);
        return result;
    }
    return mergeSortImplementation(arr, toPlot, stateLog);
};

export default {selectionSort, insertionSort, mergeSort};
// export default {mergeSort, selectionSort};