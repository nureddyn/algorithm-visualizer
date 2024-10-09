import { updatePlot } from './plotFunctions';

async function selectionSort(arr: Array<number>) {
    let n = arr.length;
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
            await updatePlot(arr);
        }
    }
    await updatePlot(arr);
    return arr;
};


async function insertionSort(arr: Array<number>) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let j = i - 1;
        let k = arr[i];
        while (j > -1 && arr[j] > k) {
            arr[j+1] = arr[j];
            await updatePlot(arr);
            j--;
        }
        arr[j+1] = k
        await updatePlot(arr);
    }
    return arr;
};



async function mergeSort(arr: Array<number>): Promise<any> {
    let n = arr.length;
    if (n == 1 || n == 0) return arr;

    let a = await mergeSort(arr.slice(0,(n/2)));
    let b = await mergeSort(arr.slice(n/2, n));
    let m = n/2;
    let i = 0, j = 0;
    let result = [];
    while (i < m && j < m) {
        if (a[i] <= b[j]) {
            result.push(a[i]);
            await updatePlot(result);
            i++;
        } else {
            result.push(b[j]);
            await updatePlot(result);
            j++;
        }
    }
    if (i < m) {
        for (let k = i; k < m; k++) {
            result.push(a[k]);
            await updatePlot(result);
        }
    } else if (j < m) {
        for (let l = j; l < m; l++) {
            result.push(b[j]);
            await updatePlot(result);
        }
    }
    return result;
};


export default {selectionSort, insertionSort, mergeSort};