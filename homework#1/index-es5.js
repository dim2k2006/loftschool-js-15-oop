/* CALCULATOR */
function Calculator(initial) {
    this.initial = initial;
}

Calculator.prototype.sum = function() {
    var argumentsLength = arguments.length,
        i = 0,
        sum = 0;

    for (i; i < argumentsLength; i++) {

        sum += arguments[i]

    }

    return this.initial + sum;
};

Calculator.prototype.dif = function() {
    var argumentsLength = arguments.length,
        i = 0,
        dif = 0;

    for (i; i < argumentsLength; i++) {

        dif -= arguments[i]

    }

    return this.initial + dif;
};

Calculator.prototype.div = function() {
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
};

Calculator.prototype.mul = function() {
    var argumentsLength = arguments.length,
        i = 0,
        mul = this.initial;

    for (i; i < argumentsLength; i++) {

        mul = mul * arguments[i];

    }

    return mul;
};



/* SqrCalc */
function SqrCalc(initial) {
    Calculator.call(this, initial);
}

SqrCalc.prototype = Object.create(Calculator.prototype);

SqrCalc.prototype.sum = function() {
    var result = Calculator.prototype.sum.apply(this, arguments);

    return result * result;
};

SqrCalc.prototype.dif = function() {
    var result = Calculator.prototype.dif.apply(this, arguments);

    return result * result;
};

SqrCalc.prototype.div = function() {
    var result = Calculator.prototype.div.apply(this, arguments);

    return result * result;
};

SqrCalc.prototype.mul = function() {
    var result = Calculator.prototype.mul.apply(this, arguments);

    return result * result;
};



/* INIT */
var myCalculator = new SqrCalc(100);



/* LOG */
console.log(myCalculator.sum(1, 2, 3));
console.log(myCalculator.dif(10, 20));
console.log(myCalculator.div(2, 2));
console.log(myCalculator.mul(2, 2));