
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


function insertionSort(arr: Array<number>): Array<number> {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let j = i - 1;
        let k = arr[i];
        while (j > -1 && arr[j] > k) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = k
    }
    return arr;
};



function mergeSort(arr: Array<number>): Array<number> {
    let n = arr.length;
    if (n == 1) return arr;

    let a = mergeSort(arr.slice(0,(n/2)));
    let b = mergeSort(arr.slice(n/2, n));
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
    return result;
};


export default {selectionSort, insertionSort, mergeSort};