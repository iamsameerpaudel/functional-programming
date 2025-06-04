var Identity = function (value) { return ({
    flatMap: function (fn) { return fn(value); },
    valueOf: function () { return value; }
}); };
Identity.of = function (val) { return Identity(val); };
var upperCase = function (str) { return Identity.of(str.toUpperCase()); };
var lowerCase = function (str) { return Identity.of(str.toLowerCase()); };
var res = Identity("SaMeEr").flatMap(upperCase);
console.log(res.valueOf()); //SAMEER
res = res.flatMap(lowerCase);
console.log(res.valueOf()); //sameer
