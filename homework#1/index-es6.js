'use strict';

/* CALCULATOR */
class Calculator {
    constructor(initial) {
        this.initial = initial;
    }

    sum() {
        var argumentsLength = arguments.length,
            i = 0,
            sum = 0;

        for (i; i < argumentsLength; i++) {

            sum += arguments[i]

        }

        return this.initial + sum;
    }

    dif() {
        var argumentsLength = arguments.length,
            i = 0,
            dif = 0;

        for (i; i < argumentsLength; i++) {

            dif -= arguments[i]

        }

        return this.initial + dif;
    }

    div() {
        var argumentsLength = arguments.length,
            i = 0,
            div = this.initial;

        try {

            for (i; i < argumentsLength; i++) {

                if (arguments[i] === 0) {

                    throw new Error('На ноль делить нельзя');

                }

                div = div / arguments[i];

            }

            return div;

        } catch(e) {

            return e;

        }
    }

    mul() {
        var argumentsLength = arguments.length,
            i = 0,
            mul = this.initial;

        for (i; i < argumentsLength; i++) {

            mul = mul * arguments[i];

        }

        return mul;
    }
}



/* SqrCalc */
class SqrCalc extends Calculator {
    constructor(initial) {
        super(initial);
    }

    sum() {
        let result = super.sum(...arguments);

        return result * result;
    }

    dif() {
        let result = super.dif(...arguments);

        return result * result;
    }

    div() {
        let result = super.div(...arguments);

        return result * result;
    }

    mul() {
        let result = super.mul(...arguments);

        return result * result;
    }
}



/* INIT */
var myCalculator = new SqrCalc(100);



/* LOG */
console.log(myCalculator.sum(1, 2, 3));
console.log(myCalculator.dif(10, 20));
console.log(myCalculator.div(2, 2));
console.log(myCalculator.mul(2, 2));