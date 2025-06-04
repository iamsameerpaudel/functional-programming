var generateMessage = function (occasion) { return function (year, month, day) {
    console.log("Your ".concat(occasion, " is on: ").concat(year, "/").concat(month, "/").concat(day));
}; };
var Dates = [
    {
        Occasion: "Wedding",
        Year: 2026,
        Month: 12,
        Day: 20
    },
    {
        Occasion: "Birthday",
        Year: 2026,
        Month: 1,
        Day: 22
    },
    {
        Occasion: "Anniversary",
        Year: 2027,
        Month: 7,
        Day: 30
    },
    {
        Occasion: "Exam",
        Year: 2026,
        Month: 6,
        Day: 10
    }
];
Dates.forEach(function (date) {
    var message = generateMessage(date.Occasion);
    message(date.Year, date.Month, date.Day);
});
