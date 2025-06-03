var increment = function (input) {
    return input + 1;
};
var numberToString = function (input) {
    return input.toString();
};
var compose = function (x, y) {
    return function (z) { return y(x(z)); };
};
var increment_then_toString = compose(increment, numberToString);
console.log(increment_then_toString(5));
console.log(numberToString(increment(5)));
