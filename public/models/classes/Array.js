import algorithms from "../../algorithms.js";
export default class CustomArray extends Array {
    constructor(arrayBody) {
        super();
        this.arrayBody = arrayBody;
    }
    executeSort() {
        // return algorithms.selectionSort(this.arrayBody);
        // return algorithms.insertionSort(this.arrayBody);
        return algorithms.mergeSort(this.arrayBody);
    }
}
