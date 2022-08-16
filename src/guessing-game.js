class GuessingGame {
    constructor() { }


    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.res = Math.round((this.max + this.min) / 2)
    }

    lower() {
        return this.max = this.res
    }

    greater() {
        return this.min = this.res
    }
}

module.exports = GuessingGame;
