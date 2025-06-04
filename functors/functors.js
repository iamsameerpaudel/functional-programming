var arr = [1, 2, 3, 4, 5];
var newarr = arr.map(function (a) { return a * 2; });
console.log(newarr);
//Array as functor
//object as functor
var functor = function (value) {
    return {
        map: function (fn) { return functor(fn(value)); },
        valueOf: function () { return value; },
        //Other methods here
    };
};
var fntr = functor('Sameer');
var uppr = fntr.map(function (val) { return val.toLowerCase(); });
console.log(uppr.valueOf());
var fntr2 = functor([1, 2, 3, 4, 5, 6, 7, 8, 9]);
var even = fntr2.map(function (val) { return val.filter(function (i) { return i % 2 == 0; }); });
var odd = fntr2.map(function (val) { return val.filter(function (i) { return i % 2 != 0; }); });
console.log(even.valueOf());
console.log(odd.valueOf());
