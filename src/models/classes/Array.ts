import algorithms from "../../algorithms.js";

export default class CustomArray<T> extends Array<T> {
    arrayBody: Array<number>;

    constructor(arrayBody: Array<number>) {
        super();
        this.arrayBody = arrayBody;
    }

    executeSort() {
        // return algorithms.selectionSort(this.arrayBody);
        // return algorithms.insertionSort(this.arrayBody);
        return algorithms.mergeSort(this.arrayBody);
    }
}
