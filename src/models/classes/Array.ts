import { plotAlgorithm } from "../../plotAlgorithm";

export default class NumberArray extends Array<number> {

    constructor(items : number[]) {
        super();
        this.push(...items);
        this.checkElementType(items);
    }

    checkElementType(items: number[]) {
        for (const item of items) {
            if (typeof item !== 'number') {
                throw new TypeError('All elements must be numbers');
            }
        }
    }

    executeSort({algorithm= ''}) {
        return plotAlgorithm([...this], algorithm);
    }

    getValues() {
        return [...this];
    }

}
