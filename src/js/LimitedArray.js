export class LimitedArray {

    #limitedArray = [];
    #min;
    #max;

    constructor(min, max) {
        this.min = min;
        this.max = max;
    }

    set min(min) {
        // check de la valeur entrer
        if(isNaN(min)) {
            throw new Error("Parameter \"min\" is not a number!");
        } else if(min > this.max) {
            throw new Error("Parameter \"min\" is bigger than parameter \"max\"!");
        }

        this.#min = min;
    }

    set max(max) {
        // check de la valeur entrer
        if(isNaN(max)) {
            throw new Error("Parameter \"max\" is not a number!");
        } else if(max < this.min) {
            throw new Error("Parameter \"max\" is smaller than parameter \"min\"!");
        }

        this.#max = max;
    }

    get min() {
        return this.#min;
    }

    get max() {
        return this.#max;
    }

    get length() {
        return this.limitedArray.length;
    }

    get limitedArray() {
        // vérifie si on a le minimum d'éléments requis
        if(this.#limitedArray.length < this.min) {
            throw new Error("This array " + this.name + " doesn't have " + this.min + " elements!");
        }

        return this.#limitedArray 
    }

    push(value) {
        // vérifie si on ajoute pas plus d'elements que le max
        if(this.#limitedArray.length >= this.max) {
            throw new Error("This array " + this.name + " is full!");
        }

        this.#limitedArray.push(value);
    }
}