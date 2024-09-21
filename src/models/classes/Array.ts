import algorithms from "../../algorithms";

export default class NumberArray extends Array<number> {

    constructor(items : number[]) {
        super(...items);
        this.checkElementType(items);
    }

    checkElementType(items: number[]) {
        for (const item of items) {
            if (typeof item !== 'number') {
                throw new TypeError('All elements must be numbers');
            }
        }
    }

    executeSort() {
        // return algorithms.selectionSort(this.arrayBody);
        // return algorithms.insertionSort(this.arrayBody);
        return algorithms.mergeSort([...this]);
    }

}
